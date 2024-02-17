/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTooth } from "react-icons/fa";


const Footer = () => {
    return <>

        <div>
            <footer className="footer p-10 bg-slate-900 text-base-content">
                <div className='flex justify-center gap-2 items-start flex-col' >
                    <div className='flex justify-center gap-2 items-center'>

                        <Link className=" text-3xl text-[#d93025] font-bold"><span className='text-white'>Donaion</span> Here </Link>
                    </div>
                    <h1 className="text-white">Get the care you need todayBringing You the highest </h1>
                </div>
                <nav>
                    <header className="footer-title text-[#d93025]">Services</header>
                    <a className="link link-hover text-white">Services</a>
                    <a className="link link-hover text-white"> Donation</a>
                    <a className="link link-hover text-white">Blogs</a>

                </nav>
                <nav>
                    <header className="footer-title  text-[#d93025]">Company</header>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#d93025]">Legal</header>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
            </footer>
        </div>


    </>



}

export default Footer