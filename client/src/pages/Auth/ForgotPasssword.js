import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");


  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/forgot-password", {
        email,
        newPassword,

      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="h-screen">
      <div className="w-full max-w-md m-auto my-6  shadow-lg sm:p-8 border-2 border-green-500 rounded-lg ">
        <div>
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-center text-green-500">
              Reset Password
            </h2>
          </div>
        </div>

        {/* Form here */}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="space-y-2">
              <label className="block text-sm">Email </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                className="w-full px-3 py-2 border rounded-md text-black bg-slate-50"
                required

              />
            </div>
            <div className="space-y-2 ">
              <div className="flex justify-between">
                <label className="text-sm">newPassword</label>
              </div>
              <div className="">
                <input

                  className="w-full px-3 py-2 border bg-slate-50"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}

                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />

              </div>
            </div>
            <div className="py-3">
              <button
                type="submit" className="w-full px-8 py-3 font-semibold rounded-full  bg-green-600 text-slate-50 hover:text-green-600 hover:shadow-2xl hover:bg-slate-50"
              >
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasssword;
