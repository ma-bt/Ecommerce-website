import React from 'react'
import Logo from '../Assets/Img/logo.jpg'
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Home from '../Page/Home';
import Coupons from '../Page/Coupons';
import Refer from '../Page/Refer';
import Flash from '../Page/Flash';

import Single from '../Page/Single';
import Single2 from '../Page/Single2';

export default function Navbar() {
 
  
  return (

    <>
      <section className='nav'>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="logo col-lg-3 d-flex gap-4">
              <Link to='/'> <img src={Logo} className='logo' alt="logo" /></Link>
           
            </div>
            <div className="col-lg-6 ps-5 d-none d-lg-block ">
              <form action="search rounded"className='d-flex'>
                <input className='me-2 rounded border border-2 form-control ' type="search" name="" placeholder=' Search Products....' aria-label="Search" />
                <button class="btn bt-1" type="submit">Search</button>
              </form>
            </div>
            <div className="col-lg-3 d-flex ">
              <div className="d-flex gap-4 justify-content-between">
               <div className="p-2 d-none d-lg-block"><Link className='text-decoration-none text-dark fw-bold'><p className='hov'> Become a Seller</p></Link> </div>
                <div><h3><i class="bi bi-heart-fill"></i></h3></div>
                <div><h3><i class="bi bi-cart-fill"></i></h3></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/refer" element={<Refer />} />
                <Route path="/flash-deals" element={<Flash />} />
                <Route path="/flash-deals/:id" element={<Single />} />
                <Route path="/coupons/:id" element={<Single2 />} />

            </Routes>
    </>
  )
}
