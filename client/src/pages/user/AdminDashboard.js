import React from "react";

import { useAuth } from "../../context/auth";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const AdminDashboard = () => {
  const [auth] = useAuth();

  // sendMessage

  const sendMessage = () => {
    const message = "I am writing to express my interest in Web Developer position at your company.With a dynamic skill set encompassing HTML, CSS, JavaScript, and expertise in React, I offer a potent blend of creativity and technical prowess as a Junior Web Developer. From crafting sleek, responsive interfaces to implementing robust backend solutions using Node.js and MongoDB, I thrive on turning ideas into polished digital experiences. My leadership experience as an IEEE Graphic Designer, guiding a team in creating over 100 captivating designs, underscores my ability to excel in collaborative environments. Eager to bring my innovative approach and passion for web development to your team, I am excited about the opportunity to contribute to your companys success. Lets build something remarkable together.Warm regards,Rezaul Karim. Check out this awesome donation link: http://localhost:3000/donate";
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://api.whatsapp.com/send?text=${encodedMessage}`;
  };


  // copyDonationLink

  const donationLink = "http://localhost:3000/donate";
  const copyDonationLink = () => {
    navigator.clipboard.writeText(donationLink)
      .then(() => {
        alert("Donation link copied ");
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert("Failed to copy donation link. Please try again.");
      });
  };





  return (
    <div>
      <div className="md:grid grid-cols-6 gap-10 p-10">

        <div className="col-span-2 md:mt-[50px]">
          <AdminMenu />
        </div>

        {/* PART-1  */}

        {/* <div className="col-span-1"></div> */}
        <div className="col-span-2 grid grid-cols-12 md:w-[800px] text-center">

          {/* part 1 */}
          <div className="col-span-6 flex flex-col items-center justify-center">
            <div>
              <h1 className="text-xl font-medium "><span className="text-orange-600">Total Goal</span></h1>
              <h1 className="text-xl font-medium pb-5">$30000</h1>
            </div>
            <Link target="_blank" > <button className="btn" onClick={sendMessage}>Share on WhatsApp</button></Link>
          </div>

          {/* part 2 */}
          <div className="col-span-6 items-center">

            <h1 className="text-xl font-medium pb-5"><span className="text-orange-600">Level achieved :</span> Star</h1>
            <div className="w-[100%] h-[5px]  bg-slate-200 "></div>
            <div className="flex gap-2 justify-center py-5">
              <button className="btn">Rewards</button>
              <button className="btn" onClick={copyDonationLink}>Copy Donation Link</button>
            </div>
            <h1>Unlock Ninja Level at 5000</h1>
            <h1 className="text-lg font-medium py-2"><span className="text-orange-600">Time Left</span> Campaign Expired</h1>
            <button className=" bg-orange-500 rounded-xl px-4 py-2 hover:shadow-md text-white">Extend Now</button>
            <div className="py-5"> <div className="w-[100%] h-[5px]  bg-orange-500 "></div></div>

            <h1 className="text-lg font-medium py-2"><span className="text-orange-600">Referance Code</span> pra7432</h1>
            <button className="btn">Start Here</button>
          </div>

        </div>


      </div>
      {/* ///////////////    */}


    </div>

  );
};

export default AdminDashboard;
