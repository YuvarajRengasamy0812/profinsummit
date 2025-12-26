import { X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
const TicketBookingModal = ({ ticket, onClose }) => {
  const [step, setStep] = useState(1);
  const [persons, setPersons] = useState(1);
  const [visitors, setVisitors] = useState([{ name: "", email: "", phone: "", idType: "", idNumber: "" }]);
  const [paymentMethod, setPaymentMethod] = useState(null);
    const [amount,setAmount]=useState(null);
       const [code,setCode]=useState(null);
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
    formData.append("amount",amount );
formData.append("refer_count",persons );
formData.append("refer_code",code );
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
        "https://staging.profinsummit.com/adminpanel/api/v1/ticket-submit",
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
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

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
              <input
                type="number"
                min="1"
                value={persons}
                onChange={(e) => handlePersonsChange(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Referral Code (Optional)</label>
              <input type="text" placeholder="Enter referral code" onChange={(e) => setCode(e.target.value ? e.target.value : null)} />
            </div>

            <div className="modal-footer">
              <button className="btn bg-pink text-white" onClick={() => setStep(2)} >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="step-content">
            <div className="row g-4">
              {/* LEFT – Visitor Forms */}
              <div className="col-12 col-md-7">
                <div className="overflow-auto visitor-forms" style={{ maxHeight: "60vh" }}>
                  {visitors.map((v, i) => (
                    <div key={i} className="visitor-box mb-4 p-3 border rounded d-flex flex-column gap-2 bg-white">
                      <h6 className="pink">Visitor {i + 1}</h6>
                      <input type="text" className="form-control" placeholder="Name (Same as ID)" value={v.name} onChange={(e) => handleVisitorChange(i, "name", e.target.value)}/>
                      <input type="email" className="form-control" placeholder="Email" value={v.email} onChange={(e) => handleVisitorChange(i, "email", e.target.value)}/>
                      <input type="text" className="form-control" placeholder="Phone (with country code)"  value={v.phone} onChange={(e) => handleVisitorChange(i, "phone", e.target.value)}/>
                      <select  value={v.idType} onChange={(e) => handleVisitorChange(i, "idType", e.target.value)}>
                        <option>ID Type</option>
                        <option>Aadhar</option>
                        <option>Driving License</option>
                        <option>Passport</option>
                        <option>Voter ID</option>
                        <option>PAN Card</option>
                      </select>
                      <input type="text" className="form-control" placeholder="ID Number" value={v.idNumber} onChange={(e) => handleVisitorChange(i, "idNumber", e.target.value)}/>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT – Booking Summary */}
              <div className="col-12 col-md-5">
                <div className="summary-box bg-lightgrey p-4 rounded sticky-top">
                  <h6 className="black">Booking Summary</h6>
                  <p>Ticket Type: <b>{ticket.name}</b></p>
                  <p>Tickets: {persons}</p>
                  <p>Subtotal: ₹{subtotal}</p>
                  <p>Tax (18%): ₹{taxAmt.toFixed(2)}</p>
                  <hr />
                  <h5>Total: ₹{total.toFixed(2)}</h5>
                  <small className="text-muted d-block">
                    Exclusive of Tax – Inclusive of Tax
                  </small>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer d-flex flex-column flex-md-row justify-content-between mt-4">
              <button className="btn border-pink mb-2 mb-md-0" onClick={() => setStep(1)}>Back</button>
              <button className="btn bg-pink text-white" onClick={() => setStep(3)}>
                Continue to Payment
              </button>
            </div>
          </div>
        )}


        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-content">
            <h5 className="mb-4">Choose Payment Method</h5>
            <div className="payment-grid">
              <div
                className={`payment-card ${paymentMethod === "now" ? "active" : ""}`}
                onClick={() => setPaymentMethod("now")}
              >
                <img src="/assets/images/payments/nowpayments.png" alt="NowPayments" />
                {/* <span>NowPayments</span> */}
              </div>

              <div
                className={`payment-card ${paymentMethod === "stripe" ? "active" : ""}`}
                onClick={() => setPaymentMethod("stripe")}
              >
                <img src="/assets/images/payments/stripe.png" alt="Stripe" />
                {/* <span>Stripe</span> */}
              </div>

              <div
                className={`payment-card ${paymentMethod === "upi" ? "active" : ""}`}
                onClick={() => setPaymentMethod("upi")}
              >
                <img src="/assets/images/payments/upi.png" alt="UPI" />
                {/* <span>UPI</span> */}
              </div>

              <div
                className={`payment-card ${paymentMethod === "usdt" ? "active" : ""}`}
                onClick={() => setPaymentMethod("usdt")}
              >
                <img src="/assets/images/payments/usdt.png" alt="USDT" />
                {/* <span>USDT</span> */}
              </div>

              <div
                className={`payment-card ${paymentMethod === "bank" ? "active" : ""}`}
                onClick={() => setPaymentMethod("bank")}
              >
                <img src="/assets/images/payments/bank-deposit.png" alt="Bank Deposit" />
                {/* <span>Bank Deposit</span> */}
              </div>

            </div>

            {/* NOW PAYMENTS */}
            {paymentMethod === "now" && (
              <div className="payment-box mb-3">
                <h6>NowPayments</h6>
                <p>Amount: ₹{total.toFixed(2)}</p>
                <button className="btn bg-pink text-white">Pay Now</button>
              </div>
            )}

            {/* STRIPE */}
            {paymentMethod === "stripe" && (
              <div className="payment-box mb-3">
                <h6>Stripe</h6>
                <p>Amount: ₹{total.toFixed(2)}</p>
                <button className="btn bg-blue text-white">Pay Now</button>
              </div>
            )}

            {/* UPI */}
            {paymentMethod === "upi" && (
              <div className="payment-box mb-3 d-flex flex-column gap-2">
                <h6>UPI Payment</h6>
                <div className="row">
                  <div className="col-lg-6 col-12 d-flex gap-2 flex-column justify-content-center align-items-center">
                    <span>MS MS SHREE SHYAM BUILDERS</span>
                    <img className="img-fluid" src="/assets/images/payments/upi-qr.png" alt="UPI QR" />
                    <span className="text-center">UPI ID: <br />profxevent@indianbank</span>
                  </div>
                  <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center align-items-start">
                    <h6 className="text-center text-lg-start">After Payment done please share the screenshot</h6>
                    <input className="" type="text" placeholder="Paid Amount"   onChange={(e) => setAmount(e.target.value)}/>
                    <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])}/>
                    <button className="btn bg-pink text-white">Submit</button>
                  </div>
                </div>
              </div>
            )}

            {/* USDT */}
            {paymentMethod === "usdt" && (
              <div className="payment-box mb-3 d-flex flex-column gap-3">
                <h6>USDT Payment</h6>
                <div className="row">
                  {/* QR Codes Section */}
                  <div className="col-lg-6 col-12 d-flex flex-column flex-lg-row gap-4 justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                      <span>Network</span>
                      <h6>TRON (TRC20)</h6>
                      <img className="img-fluid mb-2" src="/assets/images/payments/usdt-qr-1.png" alt="TRONQR" />
                      <span className="text-break text-center">TGGbNk9YvAEdguozs3EdapnEAuc1RYghio</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span>Network</span>
                      <h6>ETHEREUM (ERC20)</h6>
                      <img className="img-fluid mb-2" src="/assets/images/payments/usdt-qr-2.png" alt="ETHEREUMQR" />
                      <span className="text-break text-center">0x07b0a37f957b82633ce1aadb8e6752c88f115094</span>
                    </div>
                  </div>

                  {/* Payment Form Section */}
                  <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center align-items-center">
                    <h6 className="text-center text-lg-start">After Payment done please share the screenshot</h6>
                    <select >
                      <option>Select Network</option>
                      <option>TRON (TRC20)</option>
                      <option>ETHEREUM (ERC20)</option>
                    </select>
                    <input type="text" className="form-control"   onChange={(e) => setAmount(e.target.value)} placeholder="Paid Amount" />
                    <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])} />
                   
                  </div>
                </div>
              </div>
            )}

            {/* BANK DEPOSIT */}
            {paymentMethod === "bank" && (
              <div className="payment-box mb-3 bank-deposit-box shadow-md rounded-lg p-6 bg-white">
                <h6 className="mb-4 text-lg font-semibold text-black">Bank Deposit</h6>

                <div className="bank-grid gap-6">
                  {/* LEFT SIDE — BANK DETAILS */}
                  <div className="bank-details bg-lightgrey p-4 rounded-md flex flex-col gap-3 border border-dashed border-pink">
                    <p><strong>Account Holder:</strong> PROFINSUMMIT</p>
                    <p><strong>Account Number:</strong> 8123734309</p>
                    <p><strong>IFS Code:</strong> IDIB000R088</p>
                    <p><strong>CBS Code:</strong> 02342</p>
                    <p>
                      <strong>Bank Address:</strong><br />
                      RAJNI KHAND F3, WARD NUMBER 1,<br />
                      RAJNI KHAND, SHARDA NAGAR,<br />
                      RAEBARELI ROAD, LUCKNOW – 226002
                    </p>
                  </div>

                  {/* RIGHT SIDE — USER INPUT */}
                  <div className="bank-upload ">
                    <input
                      type="number"
                    onChange={(e) => setAmount(e.target.value)}
                      placeholder="Paid Amount"
                      className="form-input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink"
                    />

                    <input
                      type="file"
                      className="cursor-pointer"
                      onChange={(e) => setPaymentImage(e.target.files[0])}
                    />

                   
                  </div>
                </div>
              </div>
            )}

            <div className="modal-footer">
               <button className="btn bg-pink text-white w-full py-3 rounded-md hover:bg-pink/90 transition"onClick={handleSubmit}>
                      Submit Deposit
                    </button>
              <button className="btn border-pink" onClick={() => setStep(2)}>Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketBookingModal;
