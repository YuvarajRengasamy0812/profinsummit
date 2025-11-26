import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';
import Pagehelmet from '../Components/Pagehelmet'

function Bloglists() {
    return (
        <div>
            <Pagehelmet pageTitle="Blog Lists" />
            <Breadcrumb title="Blog Lists" />

            {/*--News Archive Section start*/}
            <section className="news-archive">
                <div className="container">
                    <div className="news-archive-inner">
                        <div className="row gy-5">
                            <div className="col-lg-8">
                                <div className="news-left me-4 m-md-0">
                                    <div className="row g-md-5 gy-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-box border border-1 rounded pb-2 text-center">
                                                <div className="blog-img">
                                                    <Link to="/Blogsingle">
                                                        <img
                                                            className="blog-img rounded-top w-100 h-auto"
                                                            src="/assets/images/blogs/1.png"
                                                            alt="blog-img"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog-info p-4">
                                                    <h5 className="mb-2"><Link to="/Blogsingle" className="black">How India Is Becoming the Next Global Hub for
                                                        Blockchain Innovation </Link></h5>
                                                    <p className="mb-2">
                                                        India’s blockchain adoption is accelerating across finance, governance,
                                                        and emerging tech. Explore why India is now positioned as a global blockchain powerhouse.
                                                    </p>
                                                    {/* <Link to="/Blogsingle" className="text-uppercase pink mt-auto"><small>Continue reading</small></Link> */}
                                                </div>
                                                <div className="pt-2 blog-data mt-auto border-top">
                                                    <span className="px-4  border-end "><small>April 3, 2025 </small></span><span className="px-4"><small>No Comments</small> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                                <div className="blog-img">
                                                    <Link to="/Blogsingle">
                                                        <img
                                                            className="blog-img rounded-top w-100 h-auto"
                                                            src="/assets/images/blogs/2.png"
                                                            alt="blog-img"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog-info p-4">
                                                    <h5 className="mb-2">
                                                        <Link to="/Blogsingle" className="black">
                                                            Top Blockchain Use Cases Transforming India in
                                                            2025
                                                        </Link>
                                                    </h5>
                                                    <p className="mb-2">
                                                        Explore real-use blockchain applications transforming India across
                                                        finance, healthcare, supply chain, elections, and business.
                                                    </p>
                                                    {/* <Link to="/Blogsingle" className="text-uppercase pink mt-auto"><small>Continue reading</small></Link> */}
                                                </div>
                                                <div className="pt-2 blog-data mt-auto border-top">
                                                    <span className="px-4  border-end "><small>May 1, 2025 </small></span><span className="px-4"><small>No Comments</small> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                                <div className="blog-img">
                                                    <Link to="/Blogsingle">
                                                        <img
                                                            className="blog-img rounded-top w-100 h-auto"
                                                            src="/assets/images/blogs/3.png"
                                                            alt="blog-img"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog-info p-4">
                                                    <h5 className="mb-2">
                                                        <Link to="/Blogsingle" className="black">
                                                            Why 2025 Is a Breakthrough Year for Blockchain
                                                            Adoption in India
                                                        </Link>
                                                    </h5>
                                                    <p className="mb-2">
                                                        2025 marks a historic turning point for India’s blockchain industry. Learn
                                                        why this year is critical for investors, fintech, and blockchain enterprises.
                                                    </p>
                                                    {/* <Link to="/Blogsingle" className="text-uppercase pink mt-auto"><small>Continue reading</small></Link> */}
                                                </div>
                                                <div className="pt-2 blog-data mt-auto border-top">
                                                    <span className="px-4  border-end "><small>June 5, 2025 </small></span><span className="px-4"><small>No Comments</small> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-box border border-1 rounded pb-2 text-center ">
                                                <div className="blog-img">
                                                    <Link to="/Blogsingle">
                                                        <img
                                                            className="blog-img rounded-top w-100 h-auto"
                                                            src="/assets/images/blogs/4.png"
                                                            alt="blog-img"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog-info p-4">
                                                    <h5 className="mb-2">
                                                        <Link to="/Blogsingle" className="black">
                                                            How Blockchain Can Transform India’s Financial
                                                            Future in the Next 5 Years
                                                        </Link>
                                                    </h5>
                                                    <p className="mb-2">
                                                        Blockchain is reshaping India’s financial system with transparency,
                                                        automation, and global connectivity. Here’s how the next 5 years will redefine India’s fintech
                                                        and digital economy.
                                                    </p>
                                                    {/* <Link to="/Blogsingle" className="text-uppercase pink mt-auto"><small>Continue reading</small></Link> */}
                                                </div>
                                                <div className="pt-2 blog-data mt-auto border-top">
                                                    <span className="px-4  border-end "><small>July 10, 2025 </small></span><span className="px-4"><small>No Comments</small> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-right">
                                    <div className="about-organizer p-6 box-shadow rounded text-center mb-6">
                                        <div className="organizer-title mb-3">
                                            <h6>About Organizers</h6>
                                        </div>
                                        <div className="sperator mb-6 w-20 border-bottom border-2 border-pink m-auto"></div>
                                        <div className="organizer-image">
                                            <img src="assets/images/blogs/organiser.jpeg" alt="Organizer" className=" rounded-circle mb-3" />
                                        </div>
                                        <div className="organizer-bio pb-5 mb-4 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed">
                                            <h6 className="mb-1">Hi, Dawood Sha</h6>
                                            <p className="mb-0 w-80 m-auto">
                                                <small>
                                                    Dawood Sha is a blockchain enthusiast and organizer of the ProFin Blockchain Summit 2026,
                                                    dedicated to fostering innovation and collaboration in the blockchain space.
                                                </small>
                                            </p>
                                        </div>
                                        <div className="organizer-socials pb-5">
                                            <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram', 'youtube-play'].map((icon, i) => (
                                                    <li key={i} className="d-inline">
                                                        <a href="#" className="d-inline-block rounded-circle text-grey border border-1 border-grey">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="recent-post-box p-6 box-shadow rounded mb-6">
                                        <h6 className="mb-2">Recent Posts</h6>
                                        <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                                        <div className="recent-post-list">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="recent-post d-flex align-items-center  mb-4">
                                                        <div className="post-img">
                                                            <Link to="/Blogsingle"><img src="assets/images/blogs/2.png" alt="Blog Image" className="me-3" /></Link>
                                                        </div>
                                                        <div className="post-detail">
                                                            <Link to="/Blogsingle" className="black fw-bold text-uppercase">Top Blockchain Use Cases Transforming India in
                                                                2025</Link>
                                                            <p className="mb-0"><small>May 1, 2025</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="recent-post d-flex align-items-center mb-4">
                                                        <div className="post-img">
                                                            <Link to="/Blogsingle"><img src="assets/images/blogs/3.png" alt="Blog Image" className="me-3" /></Link>
                                                        </div>
                                                        <div className="post-detail">
                                                            <Link to="/Blogsingle" className="black fw-bold text-uppercase">Why 2025 Is a Breakthrough Year for Blockchain Adoption in India</Link>
                                                            <p className="mb-0"><small>June 5, 2025</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="recent-post d-flex align-items-center mb-4">
                                                        <div className="post-img">
                                                            <Link to="/Blogsingle"><img src="assets/images/blogs/4.png" alt="Blog Image" className="me-3" /></Link>
                                                        </div>
                                                        <div className="post-detail">
                                                            <Link to="/Blogsingle" className="black fw-bold text-uppercase">How Blockchain Can Transform India’s Financial Future in the Next 5 Years</Link>
                                                            <p className="mb-0"><small>July 10, 2025</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-media-links pb-5">
                                        <h6 className="mb-2">Social Media</h6>
                                        <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                                        <div className="social-media-inner">
                                            <div className="row g-3">
                                                <div className="col-6">
                                                    <a href='https://www.facebook.com/share/qVva5zrCuYdkqGJJ/?mibextid=qi2Omg' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-facebook-official rounded mx-2 me-3" aria-hidden="true"></i>Facebook</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://x.com/profx_media' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-twitter rounded mx-2 me-3" aria-hidden="true"></i>Twitter</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://wa.me/+919629896298' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-whatsapp rounded mx-2 me-3" aria-hidden="true"></i>WhatsApp</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://www.linkedin.com/company/profxmedia/' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-linkedin-square rounded mx-2 me-3" aria-hidden="true"></i>LinkedIn</a>
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
            {/*--News Archive Section end*/}
        </div>
    )
}

export default Bloglists