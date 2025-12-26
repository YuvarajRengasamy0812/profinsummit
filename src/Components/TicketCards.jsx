import React from "react";

const ModernTicketCard = ({ ticket, onView }) => {
    return (
        <div
            className="modern-ticket relative my-4 mx-auto p-4 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            style={{
                maxWidth: 850,
                background: "#e91e63",
                color: "#fff",
                position: "relative",
                cursor: "pointer",
            }}
            onClick={onView}
        >
            {/* Overlay diagonal lines for depth */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 4px)",
                    pointerEvents: "none",
                }}
            />

            {/* Header */}
            <div className="ticket-header flex justify-between items-center mb-3">
                <h5 className="text-xl font-bold">{ticket.name}</h5>
                <span className=" text-pink-500 font-semibold px-2 py-1 rounded">{ticket.orderId}</span>
            </div>

            {/* User Info */}
            <div className="ticket-body mb-3">
                <p className="mb-1"><strong>Passenger:</strong> {ticket.userName}</p>
                <p className="mb-1"><strong>Email:</strong> {ticket.userEmail}</p>
                <p className="mb-1"><strong>Phone:</strong> {ticket.phone}</p>
                <p className="mb-1"><strong>ID:</strong> {ticket.idName} - {ticket.idNumber}</p>
            </div>

            {/* Footer */}
            <div className="ticket-footer flex justify-between items-center">
                <div>
                    <p className="mb-1"><strong>Status:</strong> {ticket.status}</p>
                    <p className="mb-0"><strong>QR:</strong> {ticket.qrCode}</p>
                </div>
                <button className="bg-white text-pink-500 font-bold px-3 py-1 rounded shadow hover:scale-105 transition-transform">
                    View
                </button>
            </div>

            {/* Side cutouts (like real boarding pass) */}
            <div style={{
                position: "absolute",
                top: "20%",
                left: -10,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
            }} />
            <div style={{
                position: "absolute",
                bottom: "20%",
                left: -10,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
            }} />
            <div style={{
                position: "absolute",
                top: "20%",
                right: -10,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
            }} />
            <div style={{
                position: "absolute",
                bottom: "20%",
                right: -10,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
            }} />
        </div>
    );
};

export default ModernTicketCard;
