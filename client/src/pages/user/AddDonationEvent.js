import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuth } from '../../context/auth';
import { useUserAuth } from '../../context/UserAuthContext';

const AddDonationEvent = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");


    const [auth, setAuth] = useAuth();
    const { user, logOut } = useUserAuth()


    //create product function
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            if (!name && !description && !price && !photo) {
                setError("Fill All Details");
            } else if (!name) {
                setError("please Enter your Name");
            } else if (!description) {
                setError("please Enter your description");
            } else if (!price) {
                setError("please Enter your price");
            } else if (!photo) {
                setError("please Enter your photo");
            }
            const res = await axios.post("http://localhost:5000/api/create-product", {
                name,
                description,
                price,
                photo,
            });
            if (res && res.data.success) {
                toast.success("Product Created Successfully");
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }

    };





    return (
        <div className='pb-10'>
            <div className="mx-14 mt-10 border-2 border-[#d93025] rounded-lg p-3 md:p-5">
                <div className="mt-10 text-center text-4xl font-bold">Create Donation Event </div>

                {auth.user || user ?
                    (<>
                        <h1 className="mt-5 md:ml-10 text-start md:text-3xl text-xl font-semibold text-[#d93025]">{auth.user ? auth.user.name : user.displayName}</h1>
                        <h1 className="mt-5 md:ml-10 text-start md:text-3xl  text-xl font-semibold ">Email : {auth.user ? auth.user.email : user.email}</h1>

                    </>)
                    : (<></>)}

                <div className="md:p-8">
                    <div className="flex gap-4">
                        <input type="text" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-700 shadow-sm placeholder:font-semibold placeholder:text-gray-700 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="Donation Title " value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input type="number" name="price" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-700shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="Donation Price" value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="my-6 flex gap-4 ">
                        <input type="text" name="name" className="mt-1 w-full  rounded-md border border-slate-300 bg-slate-100 px-3 py-4 placeholder-slate-700shadow-sm placeholder:font-semibold placeholder:text-gray-500 text-black focus:border-[#d93025] focus:outline-none focus:ring-1 focus:ring-[#d93025] sm:text-sm" placeholder="Donation Image Link " value={photo}
                            onChange={(e) => setPhoto(e.target.value)} />

                    </div>
                    <div >
                        <textarea name="textarea" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 text-black  font-semibold  bg-slate-100 " placeholder='Add Description for Donation' value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="flex items-center justify-center mb-4 py-3">
                        <button onClick={handleCreate} className="btn btn-ghost" type="submit">
                            Add Donation
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddDonationEvent
