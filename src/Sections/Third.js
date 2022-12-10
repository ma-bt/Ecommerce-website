import React from 'react'
import { Link } from 'react-router-dom'
import Flashd from '../Data/Flashd'

export default function Third() {
  


  return (
    <section className='container pt-2
     '>
      <div className="row justify-content-between">
        {/* Top ranking */}
        <div className=" trend col-lg-6 shadow-sm p-3 bg-body rounded border border-2 week">
          <div className="d-flex justify-content-between  pt-2">
            <h4 className='fw-bold'><i class="bi bi-balloon-heart-fill"></i> Top Ranking</h4>
            <Link to="/coupons"><button type='button' className='btn shadow-sm rounded border border-1'>View More</button></Link>
          </div>
          {/* Mapped-Data */}
          <div className='row'>
            {Flashd.slice(27,30).map((a, index) => (

              <div className='col-lg-2 col-md-4 box1 em '>
                <div className="p-3" >
                  <small className='rate '>-{a.rating}</small>
                  <Link to= {`/flash-deals/${a.id}`}><img src={a.thumbnail} className="" alt="..." /></Link>
                  <div className="card-body  ">
                    <div className='py-1 border-top'>
                      <small className="card-title">{a.description.substring(0, 18)} ...</small>
                      <p className="card-text fw-bold">Rs.{a.price}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Featured */}
        <div className=" trend col-lg-6 shadow-sm p-3 bg-body rounded border border-2 week">
          <div className="d-flex justify-content-between  pt-2">
            <h4 className='fw-bold'><i class="bi bi-bell-fill"></i> Top Featured</h4>
            <Link to="/coupons"><button type='button' className='btn shadow-sm rounded border border-1'>View More</button></Link>
          </div>

          {/* Mapped-Data */}
          <div className='row'>
            {Flashd.slice(11,14).map((a, index) => (
              <div className='col-lg-2 col-md-4 box1 em '>
                <div className=" p-3 " >
                  <small className='rate '>-{a.rating}</small>
                  <Link to= {`/flash-deals/${a.id}`}> <img src={a.thumbnail} className="" alt="..." /></Link>
                  <div className="card-body  ">
                    <div className='py-1 border-top'>
                      <small className="card-title ">{a.description.substring(0, 18)} ...</small>
                      <p className="card-text fw-bold">Rs.{a.price}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
