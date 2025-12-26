import React, { useState } from "react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { Camera, Ticket, User } from "lucide-react";
import TicketModal from "../Components/TicketModal";
import TicketCard from "../Components/TicketCard";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const tickets = [
        {
            name: "GENERAL PASS",
            orderId: "PBS2026-1234",
            status: "Active",
        },
        {
            name: "VIP PASS",
            orderId: "PBS2026-5678",
            status: "Used",
        },
    ];


    return (
        <>
            <PageHelmet pageTitle="My Profile" />
            <Breadcrumb title="My Profile" />

            <div className="container-fluid bg-lightgrey py-6 min-vh-100">
                <div className="container">

                    {/* PROFILE HEADER */}
                    <div className="bg-white rounded shadow p-4 mb-4 d-flex flex-wrap align-items-center gap-4">
                        <div className="position-relative d-inline-block">
                            <img
                                src="assets/images/resources/avatar.png"
                                alt="Profile"
                                className="rounded-circle img-fluid"
                                width={80}
                            />
                            <label
                                htmlFor="avatarUpload"
                                className="position-absolute bottom-0 end-0 rounded-circle bg-pink text-white d-flex align-items-center justify-content-center"
                                style={{ width: 28, height: 28, cursor: "pointer" }}
                            >
                                <Camera size={14} />
                            </label>
                            <input
                                type="file"
                                id="avatarUpload"
                                hidden
                                accept="image/*"
                            />
                        </div>
                        <div>
                            <h4 className="mb-1">Ragnar Lothbrok</h4>
                            <p className="text-grey mb-1">user@site.com</p>
                            <span className="badge border border-pink pink">
                                Exhibitor
                            </span>
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

                            {/* MY PROFILE */}
                            {activeTab === "profile" && (
                                <div className="bg-white rounded shadow p-4">
                                    <h5 className="pink mb-3">Profile Information</h5>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input className="form-control" placeholder="Full Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" placeholder="Email" disabled />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" placeholder="Company Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control" placeholder="Nationality" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="3" placeholder="Special Requirements" />
                                        </div>

                                        <div className="col-12">
                                            <button className="btn bg-pink text-white">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* MY TICKETS */}
                            {activeTab === "tickets" && (
                                <div className="bg-white rounded shadow p-4">
                                    <h5 className="pink mb-3">My Tickets</h5>
                                    {activeTab === "tickets" && (
                                        <div className="bg-white rounded shadow p-4">
                                            {/* <h5 className="pink mb-3">My Tickets</h5> */}

                                            {tickets.map((ticket, index) => (
                                                <TicketCard
                                                    key={index}
                                                    ticket={ticket}
                                                    onView={() => {
                                                        setSelectedTicket(ticket);
                                                        setShowTicketModal(true);
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
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
