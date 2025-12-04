import React, { useState } from "react";
import { postContactForm } from "../api/subscribeform"; // adjust path if needed
import Swal from "sweetalert2";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // optional if you want a name field
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    } else {
      setError("");
    }

    setLoading(true);

    try {
      const response = await postContactForm({
        api_key: "402784613679330",
        subscribe_name: name || "Subscriber", // optional name
        subscribe_email: email,
      });

      if (response.data.code === "1") {
        // Success popup
        Swal.fire({
          title: 'Bulma theme',
          theme: 'bulma',
          icon: "success",
          title: "Subscribed!",
          text: response.data.msg,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "my-swal-btn",
          },
        });

        // Clear input
        setEmail("");
        setName("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: response.data.msg || "Something went wrong",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error. Please try again.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-3">
        <div className="col-lg-8 col-md-8">
          <div className="sub-email">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <small className="text-danger">{error}</small>}
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="sub-button">
            <button type="submit" className="btn btn3 w-100" disabled={loading}>
              {loading ? "Subscribing..." : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
