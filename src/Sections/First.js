// For weekly deals

import React from 'react'
import { Link } from 'react-router-dom'
import Coupond from '../Data/Coupond'


export default function First() {
   
    return (
        <>
            <section className='mt-2'>
                <div className='shadow-sm p-3 bg-body rounded border border-2 week '>
                    <div className="d-flex justify-content-between  pt-3">
                        <h3 className='fw-bold'><i class="bi bi-clock"></i> Weekly Deals</h3>
                        <Link to="/coupons"><button type='button' className='btn shadow-sm rounded border border-1'>View More</button></Link>
                    </div>
                   

                    <div className='row'>
                        {Coupond.slice(1,6).map((a, index) => (

                            <div className='col-lg-2 col-md-4 box1 em '>
                                <div className="p-3" >
                                    <small className='rate '>-{a.rating.rate}</small>
                                    <Link to= {`/coupons/${a.id}`}><img src={a.image} className="" alt="..." /></Link>
                                    <div className="card-body  ">
                                        <div className='py-1 border-top'>
                                            <small className="card-title ">{a.description.substring(0, 18)} ...</small>
                                            <p className="card-text fw-bold">{a.price}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
