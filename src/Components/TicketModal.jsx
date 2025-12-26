import { useEffect } from "react";
import { createPortal } from "react-dom";
import { QRCodeCanvas } from "qrcode.react";
import { X } from "lucide-react";

const TicketModal = ({ ticket, onClose }) => {

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);

    // lock background scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <>
      {/* INTERNAL MODAL CSS */}
      <style>
        {`
          .ticket-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ticket-modal {
            width: 100%;
            max-width: 420px;
            position: relative;
            animation: ticketModalIn 0.25s ease;
          }

          .modal-close {
            position: absolute;
            top: 14px;
            right: 14px;
            background: transparent;
            border: none;
            cursor: pointer;
          }

          @keyframes ticketModalIn {
            from {
              transform: scale(0.92);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="ticket-modal-overlay" onClick={onClose}>
        <div
          className="ticket-modal bg-white rounded shadow p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE */}
          <button className="modal-close" onClick={onClose}>
            <X size={18} />
          </button>

          <h5 className="pink text-center mb-3">{ticket.name}</h5>

          {/* QR */}
          <div className="text-center my-4">
            <QRCodeCanvas
              value={`TICKET-${ticket.orderId}`}
              size={180}
            />
            <p className="text-grey mt-2 small">Scan at Entry</p>
          </div>

          {/* DETAILS */}
          <ul className="list-unstyled small mb-4">
            <li><b>Event:</b> PROFIN BLOCKCHAIN SUMMIT 2026</li>
            <li><b>Order ID:</b> {ticket.orderId}</li>
            <li>
              <b>Status:</b>{" "}
              <span className={`badge ${ticket.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                {ticket.status}
              </span>
            </li>
          </ul>

          {/* ACTION */}
          <button
            className="btn bg-pink text-white w-100"
            onClick={() => alert("PDF download will be enabled soon")}
          >
            Download Ticket PDF
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default TicketModal;
