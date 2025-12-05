// src/Components/Countdown.js
import React, { useState, useEffect } from 'react';
import { getAllCountdown } from '../api/countdown';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);
  const [count, setCount] = useState([]);
  const [targetDate, setTargetDate] = useState(null); // store target date from API

  useEffect(() => {
    getCountList();
  }, []);

  const getCountList = () => {
    getAllCountdown()
      .then((res) => {
        console.log(res, "count");
        setCount(res?.data?.topics || []);

        // Assuming the API returns a date in each topic
        // Pick the first topic's end date (or you can change logic as needed)
        if (res?.data?.topics?.length > 0) {
          setTargetDate(res.data.topics[0].date); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTimeLeft = () => {
    if (!targetDate) return {}; // no target date yet

    const now = new Date();
    const endTime = new Date(targetDate);
    const difference = endTime - now;

    if (difference <= 0) {
      setExpired(true);
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    if (!targetDate) return; // wait until targetDate is set
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div id="countdown" className="countdown-inner d-flex w-100">
      <div className="time m-auto py-4">
        <span id="days" className="lh-1 h1 fw-bold">{timeLeft.days}</span><br />
        <p className="text-secondary text-uppercase fw-semibold mb-0">Days</p>
      </div>

      <div className="time m-auto py-4">
        <span id="hours" className="lh-1 h1 fw-bold">{timeLeft.hours}</span><br />
        <p className="text-secondary text-uppercase fw-semibold mb-0">Hours</p>
      </div>

      <div className="time m-auto py-4">
        <span id="minutes" className="lh-1 h1 fw-bold">{timeLeft.minutes}</span><br />
        <p className="text-secondary text-uppercase fw-semibold mb-0">Minutes</p>
      </div>

      <div className="time m-auto py-4">
        <span id="seconds" className="lh-1 h1 fw-bold">{timeLeft.seconds}</span><br />
        <p className="text-secondary text-uppercase fw-semibold mb-0">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
