import { X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const TicketBookingModal = ({ ticket, onClose }) => {
  const [step, setStep] = useState(1);
  const [persons, setPersons] = useState(1);
  const [visitors, setVisitors] = useState([{ name: "", email: "", phone: "", idType: "", idNumber: "" }]);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [amount,setAmount]=useState(null);
  const [paymentImage, setPaymentImage] = useState(null); // file input

  const subtotal = ticket.price * persons;
  const taxAmt = subtotal * 0.18;
  const total = subtotal + taxAmt;

  const handlePersonsChange = (value) => {
    const count = Number(value);
    setPersons(count);
    setVisitors(
      Array.from({ length: count }, () => ({
        name: "",
        email: "",
        phone: "",
        idType: "",
        idNumber: "",
      }))
    );
  };

  const handleVisitorChange = (index, field, value) => {
    const updated = [...visitors];
    updated[index][field] = value;
    setVisitors(updated);
  };

  const handleSubmit = async () => {
    if (!paymentMethod || !paymentImage) {
      alert("Payment method and payment screenshot are required!");
      return;
    }

    const formData = new FormData();
    formData.append("api_key", "402784613679330");
    formData.append("ticket_type", ticket.name);
    formData.append("payment_type", paymentMethod);
    formData.append("amount", total);

    // Attach payment image
    formData.append("payment_image", paymentImage);

    // Attach users array
    visitors.forEach((v, i) => {
      formData.append(`tickets[${i}][name]`, v.name);
      formData.append(`tickets[${i}][email]`, v.email);
      formData.append(`tickets[${i}][phone]`, v.phone);
      formData.append(`tickets[${i}][id]`, `user${i+1}`); // temporary user_id
      formData.append(`tickets[${i}][id_name]`, v.idType);
      formData.append(`tickets[${i}][id_number]`, v.idNumber);
    });

    try {
      const response = await axios.post(
        "http://localhost/profinsummit/api/v1/ticket-submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Ticket submitted successfully!");
      onClose();
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Error submitting ticket!");
    }
  };

  return (
    <div className="custom-modal-overlay">
      <div className="ticket-custom-modal">
        {/* Header */}
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h4 className={`m-0 ${ticket.colorClass}`}>{ticket.name} Booking</h4>
          <button className="modal-close" onClick={onClose}><X /></button>
        </div>
 {/* Step Indicator */}
  <div className="steps d-flex justify-content-center my-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`step ${step >= s ? "active" : ""}`}>
              Step {s}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="step-content">
            <div className="form-group mb-4">
              <label>Enter Number of Persons</label>
              <input type="number" min="1" value={persons} onChange={(e) => handlePersonsChange(e.target.value)} />
            </div>

            <div className="modal-footer">
              <button className="btn bg-pink text-white" onClick={() => setStep(2)}>Continue</button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="step-content">
            <div className="visitor-forms">
              {visitors.map((v, i) => (
                <div key={i} className="visitor-box mb-4">
                  <input type="text" placeholder="Name" value={v.name} onChange={(e) => handleVisitorChange(i, "name", e.target.value)} />
                  <input type="email" placeholder="Email" value={v.email} onChange={(e) => handleVisitorChange(i, "email", e.target.value)} />
                  <input type="text" placeholder="Phone" value={v.phone} onChange={(e) => handleVisitorChange(i, "phone", e.target.value)} />
                  <select value={v.idType} onChange={(e) => handleVisitorChange(i, "idType", e.target.value)}>
                    <option>ID Type</option>
                    <option>Aadhar</option>
                    <option>Driving License</option>
                    <option>Passport</option>
                    <option>Voter ID</option>
                    <option>PAN Card</option>
                  </select>
                  <input type="text" placeholder="ID Number" value={v.idNumber} onChange={(e) => handleVisitorChange(i, "idNumber", e.target.value)} />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button className="btn border-pink" onClick={() => setStep(1)}>Back</button>
              <button className="btn bg-pink text-white" onClick={() => setStep(3)}>Continue to Payment</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-content">
            <h5>Select Payment Method & Upload Screenshot</h5>
            <select onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Select Method</option>
              <option value="upi">UPI</option>
              <option value="bank">Bank</option>
              <option value="stripe">Stripe</option>
              <option value="now">NowPayments</option>
              <option value="usdt">USDT</option>
            </select>

            <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])} />

            <div className="modal-footer">
              <button className="btn border-pink" onClick={() => setStep(2)}>Back</button>
              <button className="btn bg-pink text-white" onClick={handleSubmit}>Submit Booking</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketBookingModal;
