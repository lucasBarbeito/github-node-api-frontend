"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserReposTable from "@/components/UserReposTable";

const UserDetails = ({ params }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const openProfile = () => {
    window.open(user?.html_url, '_blank');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://lucbar-github-node-api.onrender.com/users/${params.username}/details`
      );
      const data = await response.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto p-6 bg-slate-700 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to {user?.login} Details
        </h1>
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar_url}
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl text-gray-200 font-semibold">
              {user?.login}
            </h2>
            <p className="text-gray-200">ID: {user?.id}</p>
            <p className="text-gray-200">Profile URL: {user?.html_url}</p>
            <p className="text-gray-200">
              Login Creation Date: {user?.created_at}
            </p>
            <button
              className="bg-black text-white py-2 font-semibold px-4 rounded-full mt-2"
              onClick={openProfile}
            >
              Visit GitHub Profile
            </button>
          </div>
        </div>
      </div>

      <UserReposTable user={user}/>
      <div className="fixed bottom-4 right-4">
        <button onClick={() => router.push('/')}> 
          <a className="bg-gray-800 text-white py-2 px-4 rounded-full">
            Return to Home Page
          </a>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
