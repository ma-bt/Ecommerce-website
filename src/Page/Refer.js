import React from 'react'
import Footer from '../Comp/Footer'

export default function Refer() {
  return (
    <>
      <section className='refer mt-3 container shadow-sm p-3  bg-body rounded border border-2'>
        <h4 className='fw-bold'>Referral & Rewards</h4>
        <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corrupti eveniet nulla, omnis, cupiditate velit ab inventore itaque consectetur debitis facilis ut unde aut quisquam consequatur  dolor sit amet consectetur adipisicing elit. Tempora corrupti eveniet nulla, omnis, cupiditate velit ab inventore itaque consectetur debitis dolor sit amet consectetur adipisicing elit. Tempora corrupti eveniet nulla, omnis, cupiditate velit ab inventore itaque consectetur debitis facilis ut unde aut quisquam consequatur nemo laboriosam totam facilis ut unde aut quisquam consequatur nemo laboriosam totam nemo laboriosam totam nisi.</p>
        <h4 className='fw-bold'>How It Works?</h4>
        <div className=" row d-flex justify-content-around py-4">
          <div className="col-lg-4">
          <button type='btn' className=' btn shadow-sm border border-2'><h1 className=''><i class="bi bi-box-arrow-in-right"></i></h1></button>
          <p className='fw-bold text-center py-2'>Step 1</p>
          <p className='text-center'>Register your account using your email in EASTRA.com and receive Rs. 100 as Registration bonus.</p>
          </div>
          <div className="col-lg-4">
          <button type='btn' className='btn shadow-sm border border-2'><h1><i class="bi bi-phone"></i></h1></button>
          <p className='fw-bold text-center py-2'>Step 2</p>
          <p className='text-center'>Copy your unique referral url from Account Invite & Earn menu Or Navigate to dashboard and Click on Referral & Rewards Link</p>
          </div>
          <div className="col-lg-4">
          <button type='btn' className='btn shadow-sm border border-2'><h1><i class="bi bi-cash-stack"></i></h1></button>
          <p className='fw-bold text-center py-2'>Step 3</p>
          <p className='text-center'>Share your Referral link to your family, friends and relatives and receive Rs. 10 per referral successful registration.</p>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  )
}
