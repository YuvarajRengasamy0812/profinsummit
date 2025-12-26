import React, { useState, useEffect } from "react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { Camera, Ticket, User } from "lucide-react";
import TicketModal from "../Components/TicketModal";
import TicketCard from "../Components/TicketCards";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState([]);
    const [loadingTickets, setLoadingTickets] = useState(false);

    // Load user from localStorage
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    // Fetch tickets for logged-in user
    useEffect(() => {
        if (activeTab === "tickets" && user) {
            const fetchTickets = async () => {
                setLoadingTickets(true);
                try {
                    const response = await fetch(
                        `https://staging.profinsummit.com/adminpanel/api/v1/ticket?api_key=402784613679330`,
                        {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        }
                    );

                    const result = await response.json();
                    console.log("API Response:", result);

                    if (result.details && result.details.tickets) {
                        const allTickets = result.details.tickets;

                        // Filter tickets containing the logged-in user
                        const filteredTickets = allTickets.filter(ticket =>
                            ticket.users.some(u => u.user_id == user.id)
                        );

                        // Flatten each user into a separate card
                        const ticketsForDisplay = [];
                        filteredTickets.forEach(ticket => {
                            ticket.users.forEach(u => {
                                ticketsForDisplay.push({
                                    ticketId: ticket.id,
                                    ticketName: ticket.ticket_type,
                                    paymentStatus: ticket.payment?.status || "Pending",
                                    userName: u.name,
                                    userEmail: u.email,
                                    userId: u.user_id,
                                    phone: u.phone,
                                    idName: u.id_name,
                                    idNumber: u.id_number,
                                    qrCode: ticket.refer_code, // QR / refer code
                                    fullTicket: ticket, // full ticket for modal
                                });
                            });
                        });

                        console.log("Tickets for User:", ticketsForDisplay);
                        setTickets(ticketsForDisplay);
                    } else {
                        setTickets([]);
                    }
                } catch (error) {
                    console.error("Ticket fetch error", error);
                    setTickets([]);
                } finally {
                    setLoadingTickets(false);
                }
            };

            fetchTickets();
        }
    }, [activeTab, user]);

    if (!user) {
        return (
            <div className="container py-5">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <>
            <PageHelmet pageTitle="My Profile" />
            <Breadcrumb title="My Profile" />

            <div className="container-fluid bg-lightgrey py-6 min-vh-100">
                <div className="container">

                    {/* PROFILE HEADER */}
                    <div className="bg-white rounded shadow p-4 mb-4 d-flex flex-wrap align-items-center gap-4">
                        <div className="position-relative">
                            <img
                                src="assets/images/resources/avatar.png"
                                alt="Profile"
                                className="rounded-circle"
                                width={80}
                            />
                            <label
                                className="position-absolute bottom-0 end-0 rounded-circle bg-pink text-white d-flex align-items-center justify-content-center"
                                style={{ width: 28, height: 28 }}
                            >
                                <Camera size={14} />
                            </label>
                        </div>
                        <div>
                            <h4 className="mb-1">{user.full_name}</h4>
                            <p className="text-grey mb-1">{user.email}</p>
                            <span className="badge border border-pink pink">{user.user_type}</span>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* SIDEBAR */}
                        <div className="col-lg-3">
                            <div className="bg-white rounded shadow p-3">
                                <button
                                    className={`w-100 btn text-start mb-2 ${activeTab === "profile" ? "bg-pink text-white" : ""}`}
                                    onClick={() => setActiveTab("profile")}
                                >
                                    <User size={16} className="me-2" />
                                    My Profile
                                </button>

                                <button
                                    className={`w-100 btn text-start ${activeTab === "tickets" ? "bg-pink text-white" : ""}`}
                                    onClick={() => setActiveTab("tickets")}
                                >
                                    <Ticket size={16} className="me-2" />
                                    My Tickets
                                </button>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="col-lg-9">
                            {/* PROFILE INFO */}
                            {activeTab === "profile" && (
                                <div className="bg-white rounded shadow p-4">
                                    <h5 className="pink mb-3">Profile Information</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" value={user.full_name} disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" value={user.email} disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" value={user.company_name || ""} disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" value={user.phone || ""} disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" value={user.nationality || ""} disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" value={user.sponsor_package || ""} disabled />
                                        </div>
                                        <div className="col-12">
                                            <textarea rows="3" value={user.special_requirements || ""} disabled />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TICKETS */}
                            {activeTab === "tickets" && (
                                <div className="bg-white rounded shadow p-4">
                                    <h5 className="pink mb-3">My Tickets</h5>

                                    {loadingTickets && <p>Loading tickets...</p>}
                                    {!loadingTickets && tickets.length === 0 && <p>No tickets found</p>}

                              {tickets.map((t) => (
    <TicketCard
        key={`${t.ticketId}-${t.userId}`}
        ticket={{
            name: t.ticketName,       
            orderId: t.ticketId,      
            status: t.paymentStatus,  
            userName: t.userName,     
            userEmail: t.userEmail,
            phone: t.phone,
            idName: t.idName,
            idNumber: t.idNumber,
            qrCode: t.qrCode,
        }}
        onView={() => {
            setSelectedTicket(t.fullTicket);
            setShowTicketModal(true);
        }}
    />
))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* TICKET MODAL */}
            {showTicketModal && selectedTicket && (
                <TicketModal
                    ticket={selectedTicket}
                    onClose={() => setShowTicketModal(false)}
                />
            )}
        </>
    );
};

export default Profile;
