import React from "react";

import { useAuth } from "../../context/auth";
import AdminMenu from "./AdminMenu";


const AdminProfile = () => {
    const [auth] = useAuth();


    return (
        <div>

            <div className="md:grid grid-cols-6 gap-10 p-10">

                <div className="col-span-2 md:mt-[50px]">
                    <AdminMenu />
                </div>

                {/* PART-1  */}

                <div className="col-span-1"></div>
                <div className="col-span-2  flex justify-center gap-2 items-center">
                    <img src={auth?.user?.userImage} alt={auth?.user?.name} className="md:w-[100px] md:h-[100px] rounded-full" />
                    <div>

                        <h3 className="text-lg font-medium py-2"> Admin Name : {auth?.user?.name}</h3>
                        <h3 className="text-lg font-medium py-1"> Admin Email : {auth?.user?.email}</h3>
                    </div>

                </div>


            </div>
            {/* ///////////////    */}


        </div>

    );
};

export default AdminProfile;
