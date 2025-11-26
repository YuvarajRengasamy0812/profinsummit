import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'

function Faq() {
  return (
    <div>
        <Pagehelmet pageTitle="Frequent Questions" />
        <Breadcrumb title="Frequent Questions" />

        {/*--General question Section start--*/}
        <section className="faq-general-ques pb-0">
        <div className="container">
            <div className="general-ques">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 p-2">
                        <div className="general-ques-left text-white">
                            <div className=" text-center">
                                <img src="assets/images/team/6.png" alt="faq-general-image" className="w-50"/><br/>
                            </div>
                            <div className="speaker-statement-box p-4 rounded bg-pink w-lg-80 mb-mi">
                                <div className="speaker-statement ps-4 border-start border-white border-7">
                                    <p><small>"From entry passes to event logistics — get clarity on everything ProFin Blockchain Summit 2026 has to offer."</small></p>
                                    <h6 className="text-white">ProFin Help Desk</h6>
                                </div>
                            </div> 
                        </div> 
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 order-1 order-lg-2 p-2">
                        <div className="general-ques-right">
                            <div className="section-title pb-4 text-center text-lg-start">
                                <p className="mb-1 pink">GENERAL QUESTIONS</p>
                                <h2 className="mb-2">FREQUENTLY ASKED <span className="pink">QUESTIONS!!</span></h2>
                                <p>Your most common blockchain, Web3, and event-related queries — answered.</p>
                            </div>

                            <div className="faq-accordion p-4 bg-white rounded border border-2 border-light-subtle">
                                <div className="accordion accordion-faq" id="accordionFlushExample">

                                    {/* FAQ 1 */}
                                    <div className="accordion-item">
                                        <p className="accordion-header p-4">
                                            <button className="accordion-button collapsed fw-semibold p-0"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne">
                                                What is the core theme of ProFin Blockchain Summit 2026?
                                            </button>
                                        </p>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body bg-lightgrey p-6">
                                                India's post-legalization Web3 boom — covering DeFi, NFTs, regulations, and adoption.
                                                Plus a 25–30% dedicated floor synced with ProFin Expo for a combined hybrid experience.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="accordion-item">
                                        <p className="accordion-header p-4">
                                            <button className="accordion-button collapsed fw-semibold p-0"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo">
                                                Where is the event venue and what are the logistics?
                                            </button>
                                        </p>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body bg-lightgrey p-6">
                                                Yashobhoomi (IICC), New Delhi — fully metro-accessible.  
                                                Event Hours: 10 AM – 9 PM.  
                                                Free airport shuttle available for attendees.
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="accordion-item">
                                        <p className="accordion-header p-4">
                                            <button className="accordion-button collapsed fw-semibold p-0"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree">
                                                Do ProFin Expo tickets work for the Blockchain Summit?
                                            </button>
                                        </p>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body bg-lightgrey p-6">
                                                VIP tickets include full free access.  
                                                Other ticket types require a separate purchase (starting at ₹1,999).  
                                                Seamless app switching between events is enabled.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {/*--General question Section end--*/}


        {/*--Popular Questions Section start--*/}
        <section className="faq-popular-ques bg-lightgrey">
            <div className="container">
                <div className="popular-ques">
                    <div className="row">

                        {/* Left Col */}
                        <div className="col-lg-6">
                            <div className="popular-ques-left me-4 m-sm-0">
                                <div className="section-title pb-4 text-center text-lg-start">
                                    <p className="mb-1 pink">POPULAR QUESTIONS</p>
                                    <h2 className="mb-">ProFin Summit <span className="pink">FAQ!!</span></h2>
                                    <p>Browse the most searched questions from attendees, exhibitors & speakers.</p>
                                </div>

                                <div className="faq-accordion p-4 mb-6 bg-white rounded">
                                    <div className="accordion accordion-faq" id="accordionExample">

                                        {/* P FAQ 1 */}
                                        <div className="accordion-item">
                                            <p className="accordion-header p-4">
                                                <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne">
                                                    Refunds & Ticket Upgrades
                                                </button>
                                            </p>
                                            <div id="collapseOne" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body bg-lightgrey p-6">
                                                    Full refunds are available until Feb 1.  
                                                    After Feb 1: tickets become transferable only.  
                                                    On-site upgrades are available on all days.
                                                </div>
                                            </div>
                                        </div>

                                        {/* P FAQ 2 */}
                                        <div className="accordion-item">
                                            <p className="accordion-header p-4">
                                                <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo">
                                                    Booth Setup & Exhibitor Support
                                                </button>
                                            </p>
                                            <div id="collapseTwo" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body bg-lightgrey p-6">
                                                    Setup begins at 8 AM on Day 1.  
                                                    Power & WiFi included by default.  
                                                    Extra display screens available for ₹10,000 each.
                                                </div>
                                            </div>
                                        </div>

                                        {/* P FAQ 3 */}
                                        <div className="accordion-item">
                                            <p className="accordion-header p-4">
                                                <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree">
                                                    Food, Accessibility & Safety
                                                </button>
                                            </p>
                                            <div id="collapseThree" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body bg-lightgrey p-6">
                                                    Halal + vegetarian options available.  
                                                    Wheelchair ramps and quiet zones accessible.  
                                                    Optional masks, temperature checks, and full insurance coverage are provided.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>  
                            </div>
                        </div>

                        {/* Right Col: Form */}
                        <div className="col-lg-6 align-self-center">
                            <div className="faq-form bg-white rounded box-shadow p-6 ms-4 m-sm-0">
                                <div className="form-title mb-4">
                                    <h2 className="mb-2">Still have a <span className="pink">Question</span>?</h2>
                                    <p className="m-0">Can’t find what you’re looking for? Our team is here to help.</p>
                                </div>

                                <div className="form-content justify-content-between">
                                    <form>
                                        <input type="text" placeholder="Full Name" className="mb-3"/>
                                        <div className="row justify-content-around">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="tel" placeholder="Phone No." className="mb-3"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="email" placeholder="Email Address" className="mb-3" required/>
                                            </div>
                                        </div>

                                        <textarea placeholder="How may we help you?" rows="4" className="mb-3"></textarea>
                                        <button className="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                                    </form>  
                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </section>
        {/*--Popular question Section end--*/}

    </div>
  )
}

export default Faq
