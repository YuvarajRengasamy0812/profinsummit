import React, { useState } from "react";
import { postContactForm } from "../api/contactform";
import Swal from "sweetalert2";
import 'sweetalert2/themes/bulma.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postContactForm({
        api_key: "402784613679330",
        contact_name: formData.name,
        contact_email: formData.email,
        contact_phone: formData.phone,
        contact_subject: formData.subject,
        contact_message: formData.message,
      });

      if (response.data.code == "1") {
        // Show success popup
        Swal.fire({
          title: 'Bulma theme',
          theme: 'bulma',
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          confirmButtonText: "OK",
        });

        // Clear input fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Show error popup if backend returns a message
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: response.data.msg || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-3"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="phone-no">
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          className="mb-3"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10,15}"
          title="Please enter a valid phone number (10–15 digits)"
          required
        />
      </div>

      <div className="subject">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mb-3"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="message">
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="mb-3"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}{" "}
        <i className="fa fa-long-arrow-right ms-3"></i>
      </button>
    </form>
  );
};

export default ContactForm;
