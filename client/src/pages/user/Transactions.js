
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AdminMenu from "./AdminMenu";

const Transactions = () => {

    const [donations, setDonations] = useState([]);
    //getall products
    const getAppointmentController = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/donations");
            setDonations(data.donations);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAppointmentController();
    }, []);


    return (
        <div>

            <div className="md:grid grid-cols-6 gap-10 p-10">

                <div className="col-span-2 md:mt-[50px]">
                    <AdminMenu />
                </div>

                {/* PART-1  */}

                <div className="col-span-2 md:w-[800px] ">

                    <div className=" ">
                        <h3 className="text-center text-2xl font-semibold pb-5">All Transactions </h3>
                        <div className="md:flex justify-around text-xl font-bold">
                            <h1>Name</h1>
                            <h1>Amount</h1>
                            <h1>phone</h1>
                            <h1>Date</h1>
                            <h1>message</h1>
                        </div>
                        <div className=" ">
                            {donations?.map((p,) => (
                                <Link
                                    key={p._id}

                                    className=""
                                >
                                    <div className=" border-[1px] border-black p-5 hover:shadow-xl" >


                                        <div className="md:flex justify-around items-center text-lg">

                                            <h5 className="font-semibold text-xl">{p.name}</h5>
                                            <h5 className="font-medium text-lg">{p.amount}</h5>
                                            <h5 className="font-medium text-lg">{p.phone}</h5>

                                            <h5 className="font-medium text-lg">{p.createdAt.slice(1, 10)}</h5>
                                            <h5 className="font-medium text-lg">{p.message}</h5>



                                        </div>
                                    </div>

                                </Link>
                            ))}
                        </div>

                    </div>


                </div>


            </div>
            {/* ///////////////    */}


        </div>



    )
}

export default Transactions
