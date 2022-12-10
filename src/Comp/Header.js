import React from 'react'

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className=' container '>
                    <ul className='list-unstyled d-flex  gap-4 justify-content-end'>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <small>Sell On EASTRA</small>
                            </a>
                            <ul className="dropdown-menu shadow p-3 mb-5 bg-body rounded border border-0">
                                <li><a className="dropdown-item" href="#"><small>Seller Login</small> </a></li>
                                <li><a className="dropdown-item" href="#"><small>Seller Suppport</small></a></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link " href="#" role="button" >
                                <small>Buyer Protection</small>
                            </a>
                            
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <small>Help <i class="bi bi-question-lg"></i></small>
                            </a>
                            <ul className="dropdown-menu shadow p-3 mb-5 bg-body rounded border border-0">
                                <li><a className="dropdown-item" href="#"><small>Contact Us</small> </a></li>
                                <li><a className="dropdown-item" href="#"><small>FAQs</small></a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <small><i class="bi bi-person-fill"></i> Account</small>
                            </a>
                            <ul className="dropdown-menu shadow p-3 mb-5 bg-body rounded border border-0">
                                <li><a className="dropdown-item" href="#"><small>WELCOME TO ESTRA</small> </a></li>
                                <ul><li> <button type = 'btn' className='btn '> Login</button></li></ul>
                            </ul>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    )
}
