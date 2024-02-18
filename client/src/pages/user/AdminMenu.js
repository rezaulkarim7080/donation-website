import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center  ">
        <h4 className="font-bold text-3xl text-center pb-2">Admin Panel</h4>
        <div className="flex flex-col gap-2">

          <NavLink
            to="/admin-profile"
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            Admin Profile
          </NavLink>

          <NavLink
            to="/admin-dashboard"
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/add-donation-event"
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            Create Donation Event
          </NavLink>
          <NavLink
            to="/transactions"
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            Transactions
          </NavLink>
          <NavLink
            to=""
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            Start's Here
          </NavLink>
          <NavLink
            to=""
            className="font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md hover:text-[#d93025] "
          >
            FAQ's
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
