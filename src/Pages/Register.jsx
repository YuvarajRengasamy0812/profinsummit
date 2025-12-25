import React from 'react'
import { Link } from 'react-router-dom'
import PageHelmet from '../Components/Pagehelmet'
import Breadcrumb from '../Components/Breadcrumb'
import { Globe, Mail, PhoneCall, Pin } from 'lucide-react'

const Register = () => {
    return (
        <>
            <div>
                <PageHelmet pageTitle="Register" />
                <Breadcrumb title="Register" />
                <div className="container-fluid min-vh-100 py-6 d-flex align-items-center bg-lightgrey">
                    <div className="container">
                        <div className="row g-4 align-items-stretch">

                            {/* LEFT SIDE – CONTACT INFO */}
                            <div className="col-12 col-lg-5">
                                <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column gap-3">

                                    <h5 className="pink mb-2">Contact Info:</h5>

                                    <p className="mb-1 fw-semibold">
                                        <Pin /> Yashobhoomi, New Delhi
                                    </p>

                                    <p className="mb-1">
                                        <Link className="text-grey d-flex align-items-center gap-1" to="https://www.profinsummit.com" target="_blank" rel="noreferrer">
                                            <Globe /> www.profinsummit.com
                                        </Link>
                                    </p>

                                    <p className="mb-1">
                                        <Link className="text-grey d-flex align-items-center gap-1" to="tel:+919629896298"><PhoneCall /> +91 9629896298</Link>
                                    </p>

                                    <p className="mb-3">
                                        <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profinsummit.com"><Mail /> info@profinsummit.com</Link>
                                    </p>

                                    {/* MAP */}
                                    <div className="ratio ratio-16x9 rounded overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12685.506297821054!2d77.03068256378171!3d28.555189676178713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b86c10b12cf%3A0xa6d41303342b088c!2sYashobhoomi!5e1!3m2!1sen!2sus!4v1766669955282!5m2!1sen!2sus"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Yashobhoomi Map"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE – REGISTER FORM */}
                            <div className="col-12 col-lg-7">
                                <div className="h-100 bg-white rounded shadow p-4">

                                    <h4 className="pink mb-4 text-center">Register for PROFIN BLOCKCHAIN SUMMIT 2026</h4>

                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Full Name" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Email" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Company Name" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Phone" required />
                                        </div>

                                        <div className="col-md-6">
                                            <select >
                                                <option>User Type</option>
                                                <option>Exhibitor</option>
                                                <option>Sponsor</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Nationality" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="password" className="form-control" placeholder="Password" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="password" className="form-control" placeholder="Confirm Password" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Special Requirements (Optional)"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <select>
                                                <option>Sponsor Package</option>
                                                <option>Summit Partner</option>
                                                <option>Track Sponsor</option>
                                                <option>Session Ally</option>
                                                <option>Content Collaborator</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <textarea
                                                rows="3"
                                                placeholder="Products / Services to Showcase"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="terms" required />
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree to the <Link to="/terms" className="pink">Terms & Conditions</Link>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn bg-pink text-white w-100">
                                                Register
                                            </button>
                                        </div>

                                        <div className="col-12 text-center">
                                            <small className="text-grey">
                                                Already have an account?{" "}
                                                <Link to="/Login" className="pink">
                                                    Login
                                                </Link>
                                            </small>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Register