import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';





const Header = () => {

    const [nav, setNav] = useState(false);


    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        // navigate('/login')
        toast.success("Logout Successfully");
    };


    const handlenav = () => {
        setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    };



    return (
        <div className=" flex justify-between items-center h-20 max-w-[100%] 
   mx-auto px-5 bg-slate-900 text-slate-100">
            <Link to={"/"} onClick={closeNav}>

                <h1 className="width-full text-4xl font-bold text-white">
                    DONATION
                </h1>
            </Link>

            <ul className="hidden md:flex items-center text-lg ">

                <Link to={'/'} onClick={closeNav}>
                    <li className="p-4 pl-10 hover:text-[#d93025]">Home</li>
                </Link>
                <Link to={'/donate'} onClick={closeNav}>
                    <li className="p-4 hover:text-[#d93025]">Donation</li>
                </Link>


                {/* /////////////////  */}
                {

                    !auth.user ? (<> <Link to='/login' className='btn' >Login</Link>
                    </>)
                        : (auth.user.role === 0 ?
                            (<>
                                <div className='flex justify-around items-center gap-4'>
                                    <h1>{auth.user.name}</h1>
                                    <Link to='' onClick={closeNav}>
                                        <img src={auth.user.userImage} alt={auth.user.name} className='w-[50px] rounded-full' />
                                    </Link>

                                    <Link to='/' onClick={handleLogout} >
                                        <button className='btn'>Logout</button>
                                    </Link>

                                </div>

                            </>)
                            :
                            (<>

                                <div className='flex justify-around items-center gap-4'>
                                    <h1>{auth.user.name}</h1>
                                    {/* <Link to={'/add-donation-event'}>Add donation</Link> */}
                                    <Link to='' onClick={closeNav}>

                                        <img src={auth.user.userImage} alt={auth.user.name} className='w-[55px] h-[55px] rounded-full' />
                                    </Link>

                                    <Link to='/admin-dashboard' className='btn' onClick={closeNav}>Dashboard</Link>
                                    <Link to='/' onClick={handleLogout} >
                                        <button className='btn'>Logout</button>
                                    </Link>
                                </div>
                            </>)

                        )
                }
                {/* //////////////////////  */}


            </ul>



            {/* Reaponsive */}

            <div onClick={handlenav} className="block md:hidden">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[80%] z-50 h-full bg-slate-800 ease-out duration-500' : 'fixed left-[-100%] z-50'}>
                <ul className="pt-24 flex flex-col justify-center  items-center">


                    <Link to={'/'} onClick={closeNav}>
                        <li className="p-4  hover:text-[#d93025] text-center w-full border-b 
              border-b-[#ffffff]">Home</li>
                    </Link>
                    <Link to={'/shop-page'} onClick={closeNav}>
                        <li className="p-4 hover:text-[#d93025] text-center border-b 
              border-b-[#ffffff]">Shop</li>
                    </Link>

                    {

                        !auth.user ? (<> <Link to='/register' className='btn' onClick={closeNav}>Login</Link>
                        </>)
                            : (auth.user.role === 0 ?
                                (<>
                                    <div className='flex flex-col items-center gap-4'>
                                        <Link to='' onClick={closeNav}>

                                            <img src={auth.user.userImage} alt={auth.user.name} className='w-[50px] rounded-full' />
                                        </Link>

                                        <Link to='/user-dashboard' className='btn' onClick={closeNav}>Dashboard</Link>
                                        <Link to='/' onClick={handleLogout}>
                                            <button className='btn' onClick={closeNav}>Logout</button>
                                        </Link>

                                    </div>

                                </>)
                                :
                                (<>

                                    <div className='flex flex-col items-center gap-4'>
                                        <Link to='' onClick={closeNav}>

                                            <img src={auth.user.userImage} alt={auth.user.name} className='w-[55px] h-[55px] rounded-full' />
                                        </Link>
                                        <Link to='/admin-dashboard' className='btn' onClick={closeNav}>Dashboard</Link>
                                        <Link to='/' onClick={closeNav}>
                                            <button className='btn' onClick={handleLogout}>Logout</button>
                                        </Link>
                                    </div>
                                </>)

                            )
                    }

                </ul>
            </div>
        </div >
    )
}

export default Header
