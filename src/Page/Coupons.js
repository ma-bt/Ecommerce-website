import React from 'react'
import Coupond from '../Data/Coupond'
import { Link } from 'react-router-dom'
import Footer from '../Comp/Footer'

export default function Coupons() {
  return (
    <>
    <section>
      <div className="coupon">
        <div className="container text-center py-4">
          <p className='fw-bold m-0'>Hi! Welcome to EASTRA Online Shopping</p>
          <h4 className='fw-bold py-3'>Coupons & Offer Zone!</h4>
          <div className="d-flex justify-content-center gap-3 py-3">
            <button type='btn' className='btn'><i class="bi bi-box2-heart"></i> Coupons</button>
            <button type='btn' className='btn px-4 '><i class="bi bi-bag-heart"></i> Offers </button>
          </div>
        </div>
      </div>
      <div className="py-3 container">
        <h4 className='fw-bold text-start'>Exclusive Seller's Discounts On All Products Featured Here.</h4>

        <div className="container flash">
          <div className='row'>
            {Coupond.map((a, index) => (

              <div className='col-lg-3 col-md-4 m-box'>
                <div className=" box  shadow p-3  bg-body rounded border border-1 " >
                  <small className='rate '>-{a.rating.rate}%</small>
                  <Link to= {`/coupons/${a.id}`}><img src={a.image} className="" alt="..." /></Link>
                  <div className="card-body pt-3 ">
                    <div className='py-4 border-top'>
                      <small className="card-title ">{a.title.substring(0, 21)} ...</small>
                    </div>
                    <p className="card-text fw-bold">Rs.{a.price}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  )

 
}
