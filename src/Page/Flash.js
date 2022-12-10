import React from 'react'
import Flashd from '../Data/Flashd'
import { Link } from 'react-router-dom'
import Footer from '../Comp/Footer'

export default function Flash() {
  return (
    <>
      <div className="container flash">
        <div className="coupon">
          <div className="container text-center py-4">
            <p className='fw-bold m-0'>Hi! Welcome to EASTRA Online Shopping</p>
            <h4 className='fw-bold py-3'>Flash Offer Zone!</h4>

          </div>
        </div>
        <div className='row container'>
          {Flashd.map((a, index) => (

            <div className='  col-lg-3 col-md-4 m-box'>
              <div className=" box  shadow p-3  bg-body rounded border border-1 " >
                <small className='rate '>-{a.discountPercentage}%</small>
                <Link to={`/flash-deals/${a.id}`}> <img src={a.thumbnail} className="" alt="..." /></Link>
                <div className="card-body pt-3 ">
                  <div className='py-4 border-top'>
                    <small className="card-title   ">{a.title.substring(0, 21)} ...</small>

                  </div>

                  <p className="card-text fw-bold">Rs.{a.price}</p>



                </div>
              </div>

            </div>

          ))}
        </div>

      </div>
      <Footer />
    </>
  )
}
