import React from 'react'
import Coupond from '../Data/Coupond'
import { useParams, Link } from 'react-router-dom'
import Flashd from '../Data/Flashd'
import { useState } from "react";

export default function Single() {

    const [count, setCount] = useState(0);

    let { id } = useParams()
    let dataCD = Flashd.find((a) => a.id == id)

    return (
        <>
            <section className="single ">
                <div className="container py-4">
                    <div className='row  d-flex justify-content-between'>
                        {/* FIRST DIV IF IMG */}
                        <div className='col-lg-3 p-0 '>
                            <img src={dataCD.thumbnail} alt='img' className='w-100 shadow p-1 bg-body rounded border border-2 p-0 ' />.
                        </div>

                        {/* SECOND DIV OF DESCRIPTION */}
                        <div className='col-lg-6 shadow p-3  bg-body rounded border border-2 mid mx-auto'>
                            <div className="pb-3">
                                <p className='fw-bold m-0 pb-2'>{dataCD.title}</p>
                                <small className='  '>{dataCD.description}</small>
                            </div>

                            <div className=" border-top d-flex row border-bottom pb-2 pt-3 mt-1">
                                <div className=" col-lg-6 gap-4 d-flex justify-content-start ">
                                    <h4 className='fw-bold  mt-2'>Rs.{dataCD.price}</h4>
                                    <small className='rate1 py-2 px-3 mb-2'>-{dataCD.discountPercentage}% off</small>
                                </div>

                                <div className="col-lg-6 d-flex justify-content-end">
                                    <h5 className='fw-bold  mt-2'>Stock: {dataCD.stock}</h5>
                                </div>

                            </div>
                            <div className='py-3'>

                                <p className="fw-bold ">Quantity</p>
                                <div className="d-flex gap-3">
                                    <button onClick={() => setCount((c) => c - 1)} className='btn btn-light border rounded border-1 mb-2'>-</button>
                                    <p className='mt-2'> {count}</p>
                                    <button onClick={() => setCount((c) => c + 1)} className='btn btn-light border rounded border-1 mb-2'>+</button>
                                </div>
                                <p className="fw-bold py-3 text-danger">Rating: {dataCD.rating}</p>

                            </div>

                        </div>

                        {/* THIRD DIV FOR BUY  */}
                        <div className='col-lg-3 shadow p-3 bg-body rounded border border-2 last border-top'>
                            <div className="py-3 border-bottom">
                                <p className='fw-bold m-0'><i class="bi bi-arrow-repeat text-danger"></i> Easy Returns</p>

                                <small>Return unfit units within 7 days</small>
                            </div>
                            <div className="py-3 border-bottom">
                                <p className='fw-bold m-0'><i class="bi bi-check-all text-danger"></i> Qualtiy Checked</p>

                                <small>With us, you always get what you order</small>
                            </div>
                            <div className="py-3 border-bottom">
                                <p className='fw-bold m-0'><i class="bi bi-credit-card text-danger"></i> Safe Payment</p>
                                <small>Pay online or COD available</small>
                            </div>
                            <div className="d-flex pt-3" >
                                <button type='btn' className='btn shadow-sm  rounded border border-2  btn1'><i class="bi bi-credit-card-fill"></i> BUY NOW</button>
                                <button type='btn' className='btn shadow-sm  rounded border border-2  btn2'><i class="bi bi-cart3"></i> ADD TO CART</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>


        </>



    )

}

