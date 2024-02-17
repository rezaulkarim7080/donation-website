/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
        <div className='px-5 py-5'>
            <div class="relative h-[550px] w-full rounded-3xl" >
                <img src="https://evangelistjoshua.com/wp-content/uploads/2017/10/o-MALNUTRITION-facebook-1.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter  rounded-3xl" />
                {/* oaverlay */}
                <div class="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
                {/* /end */}

                <div class="absolute inset-0 flex flex-col items-start justify-center px-5">
                    <h1 class="text-6xl font-bold text-white mb-4">
                        Rezaul Karim <span className='text-[#d93025]'>Donation </span>
                    </h1>
                    <p class="text-lg text-white mb-8">
                        Give the gift of giving with a GlobalGiving Gift Card.
                    </p>

                    <div className='flex justify-items-start gap-5'>
                        <Link to={'/login'}>
                            <button className='bg-[#ffffff] text-black py-3 px-10 rounded-full  text-center font-medium hover:shadow-2xl hover:text-[#d93025] hover:border-[#d93025]'> Login</button>
                        </Link>


                        <Link to={'/donate'}>
                            <button className='bg-[#ffffff] text-[#000000] py-3 px-10 rounded-full  text-center font-medium hover:shadow-2xl hover:text-[#d93025] hover:border-[#d93025]'>Donate Here</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero