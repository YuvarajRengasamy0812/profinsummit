import { QrCode } from "lucide-react";

const TicketCard = ({ ticket, onView }) => {
  return (
    <div className="ticket-stub d-flex justify-content-between align-items-center mb-3">
      <div className="ticket-left">
        <h6 className="mb-1">{ticket.name}</h6>
        <p className="mb-1 text-grey">PROFIN BLOCKCHAIN SUMMIT 2026</p>
        <small className="text-grey">Order ID: {ticket.orderId}</small>
      </div>

      <div className=" text-end">
        <span className={`badge ${ticket.status === "Active" ? "bg-success" : "bg-secondary"}`}>
          {ticket.status}
        </span>
        <button className="btn btn-sm border-pink mt-2" onClick={onView}>
          <QrCode size={16} className="me-1" />
          View Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
