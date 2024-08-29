import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  useEffect(() => {
    if (!user?.id) {
      toast.error("Please login to view this page");
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="max-w-screen-lg mx-auto mt-24 px-5">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Enter first name"
            id="firstname"
            name="firstname"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Enter last name"
            id="lastname"
            name="lastname"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Enter email address"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
            placeholder="Enter password"
            id="password"
            name="password"
          />
        </div>
        <Button type="submit" text="Update Profile" mode="brown" />
        <Link
          to="/order-history"
          className="bg-white text-black text-center text-xl border border-gray-400 font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Order History
        </Link>
      </form>
    </div>
  );
};

export default UserProfile;
