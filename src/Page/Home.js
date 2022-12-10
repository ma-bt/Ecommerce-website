import React from 'react'
import items from '../Data/Cat';
import { MegaMenu } from 'primereact/megamenu';
import { Link } from 'react-router-dom'
import Banner1 from '../Assets/Img/banner-1.webp'
import Banner2 from '../Assets/Img/banner-2.webp'
import Banner3 from '../Assets/Img/banner-3.webp'
import Banner4 from '../Assets/Img/banner-4.webp'
import Banner5 from '../Assets/Img/banner-5.webp'
import Banner6 from '../Assets/Img/banner-6.webp'
import Log1 from '../Assets/Img/log1.webp'
import Log2 from '../Assets/Img/log2.webp'
import First from '../Sections/First';
import Sec from '../Sections/Sec';
import Footer from '../Comp/Footer';
import Third from '../Sections/Third';



export default function Home() {
    const Pic = [
        {
            img: Banner4,
            body: 'CG 43 inch Smart TV'
        },
        {
            img: Banner5,
            body: 'HOCO Dancer Outdoor Wire'
        },
        {
            img: Banner6,
            body: 'Usupso Teddy Bear '
        },
    ]
    return (
        <>
            <section>
                <div className="container pt-4">
                    <div className="row ">
                        <div className="col-lg-3 pb-3 d-none d-lg-block ">
                            <div >
                                <div className="d-flex gap-2">
                                    <h4 ><i class="bi bi-list"></i></h4>
                                    <h5>Categories</h5></div>
                                <MegaMenu model={items} className="mega shadow-sm
                                 p-3  bg-body rounded border border-2" orientation="vertical" />
                            </div>

                        </div>
                        {/* mid */}
                        <div className="col-lg-6 px-0 pe-2  ">
                            {/* components */}
                            <div>
                                <ul className='d-flex gap-5 justify-content-center list-unstyled '>
                                    <li ><Link to='/flash-deals' className='text-decoration-none text-reset fw-bold'>Flash Deals</Link></li>
                                    <li><Link to='/coupons' className='text-decoration-none text-reset fw-bold'> Coupons & Offer Zone</Link></li>
                                    <li><Link to='/refer' className='text-decoration-none text-reset fw-bold'>Refer & Earn</Link></li>
                                </ul>
                            </div>
                            <div>

                                {/* carousel */}
                                <div className='shadow-sm
                                 p-3  bg-body rounded border border-2'>
                                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval={3000}>
                                                <img src={Banner1} className="d-block w-100" alt="..." />

                                            </div>
                                            <div className="carousel-item" data-bs-interval={3000}>
                                                <img src={Banner2} className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">

                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval={3000}>
                                                <img src={Banner3} className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">

                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                {/* below the carousel */}
                                <div className="d-none d-lg-block">
                                    <div className="shadow-sm p-3 mt-3 mb-4 bg-body rounded border border-2 d-flex im">
                                        <div className='g-0 py-2'>

                                            <h5 className='fw-bold'>Top Ranking</h5>
                                            <h6 className='fw-light py-3 '>EASTRA official Ranking</h6>
                                            <p><Link to='/viewmore-top-ranking ' className='text-decoration-none text-reset fw-bold'>View More</Link></p>

                                        </div>
                                        <div className="row">
                                            {Pic.map((a, index) => (
                                                <div className="col-lg-4  m-0">
                                                    <img src={a.img} alt="" className='' /> <br />
                                                    <small className='p-0 m-0'>{a.body}</small>
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Login */}

                        <div className=" d-none d-lg-block col col-lg-3  shadow-sm
                                 p-3 mb-5 bg-body rounded border border-2  login">
                            <div>
                                <h1 className='text-center py-3'><i class="bi bi-person-circle"></i></h1>
                                <p className='text-center fw-bold'>Welcome to EASTRA.com !</p>
                                <div className="d-flex gap-3 justify-content-center pb-3">
                                    <button type='btn' className=' btn colo px-4 py-1 shadow-sm
                                   rounded border border-1 '>Register</button>
                                    <button type='btn' className=' btn btn-light px-4 py-1 shadow-sm
                                    rounded border border-1 '>Sign in</button>

                                </div>
                                <div className="back shadow-sm border border-1
                               ">
                                    <div className="pt-3 px-3">
                                        <p className='m-0'>Welcome to Newcomers !</p>
                                        <h5 className='fw-bold  pt-1'>Register Now & Get Rs.100 for Free</h5>
                                    </div>
                                    <div className="d-flex front justify-content-center gap-3 p-2 mx-3 my-2">
                                        <div className='text-center'>
                                            <img src={Log1} alt="" className='' />
                                            <button type="button" class="btn colo btn-sm">Rs.50,012</button>
                                        </div>
                                        <div className='text-center'>
                                            <img src={Log2} alt="" className='' />
                                            <button type="button" class="btn colo btn-sm">Rs.20,213</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <First />
                    <Sec />
                    <Third />

                </div>

            </section>
            <Footer />

        </>
    )
}
