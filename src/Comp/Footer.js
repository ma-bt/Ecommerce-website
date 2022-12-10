import React from 'react'
import FootD, { FootD1 } from '../Data/FootD'

export default function Footer() {
  return (
    <>
      <section className='Foot1 border-top mt-5'>
        <div className="container border-bottom">
          <div className="row py-4">
            {FootD.map((a, index) => (
              <div className="col-lg-2 text-center ">
                <h3 className='m-0 p-0'>{a.icon}</h3>
                <p className='fw-bold m-0 p-1'>{a.title}</p>
                <small>{a.body}</small>
              </div>

            ))}
          </div>
        </div>
        
      </section>
      <section>
      <div className="container py-4">
          <div className="row">
              
                  {FootD1.map((a) => (

                    <div className="col-lg-3">
                      <h5 className="fw-bold">
                        {a.title}
                      </h5>
                      <h6 className="">
                        {a.body1}
                      </h6>
                      <h6 className="">
                        {a.body2}
                      </h6>
                      <h6 className="">
                        {a.body3}
                      </h6>
                      <h6 className="">
                        {a.body4}
                      </h6>

                    </div>
                  ))}
                

            <div className="col-lg-3">
              <h6 className="fw-bold">
                Connect With Us
              </h6>
              <div className="flex  gap-3 justify-content-start">
                <h3><i class="bi bi-facebook"></i></h3>
                <h3><i class="bi bi-instagram"></i></h3>
              </div>
              <h6><i class="bi bi-phone-fill"></i>+977-9898989898</h6>
              <h6><i class="bi bi-envelope"></i> shop@eastra.com</h6>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
