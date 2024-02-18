import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { useAuth } from "../../context/auth";
import { useUserAuth } from "../../context/UserAuthContext";

const MakeDonationForm = () => {
    //context
    const [auth, setAuth] = useAuth();
    const { user, logOut } = useUserAuth()



    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");


    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            if (!name && !email && !phone && !amount && !message) {
                setError("Fill All Details");
            } else if (!name) {
                setError("please Enter your Name");
            } else if (!email) {
                setError("please Enter your email");
            } else if (!phone) {
                setError("please Enter your phone");
            } else if (!amount) {
                setError("please Enter your amount");
            }

            else if (!message) {
                setError("please Enter your message");
            }
            else {
                const res = await axios.post("http://localhost:5000/api/create-donation", {

                    name,
                    email,
                    phone,
                    amount,
                    message,

                });
                if (res && res.data.success) {
                    toast.success("donation Created Successfully");
                    navigate("/");
                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }


    }




    return (
        <div className='pb-10'>

            {auth.user || user ? (<>

                <div className="mx-14 mt-10 border-2 border-[#d93025] rounded-lg p-3">
                    <div className="mt-10 mx-20 text-center md:text-4xl text-xl font-bold">Donate Here</div>
                    <div className="md:p-8 p-3">
                        <div className="flex gap-4">
                            <input type="text" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="name " value={name}
                                onChange={(e) => setName(e.target.value)} />

                            <input type="text" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="flex gap-4">
                            <input type="number" name="amount" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="amount " value={amount}
                                onChange={(e) => setAmount(e.target.value)} />

                            <input type="text" name="phone" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="phone" value={phone}
                                onChange={(e) => setPhone(e.target.value)} />

                        </div>


                        <div >
                            <textarea name="textarea" id="text" cols={30} rows={5} className="mt-1 block w-full rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder='Add message' value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <p className="py-3 text-xl text-red-600">{error} </p>
                        <div className="flex items-center justify-center mb-4 py-5">
                            <button onClick={handleCreate} className="btn btn-ghost" type="submit">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </>) : (<>

                <div className="flex justify-center flex-col items-center"> <h1 className="mt-10 mx-20 text-center text-4xl font-bold">Please Login To Book an Appoinment </h1>
                    <Link to={'/login'} ><button className="btn btn-ghost">Goto Login</button> </Link>
                </div>
            </>)
            }


        </div >


    )
}

export default MakeDonationForm
