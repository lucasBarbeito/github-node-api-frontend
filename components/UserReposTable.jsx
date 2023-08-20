"use client"
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserReposTable = ({user}) => {

    const [repos, setRepos] = useState([]);
    const router = useRouter();
  
    const openProfile = (repo) => {
      window.open(repo?.html_url, '_blank');
    };
  
    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch(
          `https://lucbar-github-node-api.onrender.com/users/${user.login}/repos`
        );
        const data = await response.json();
        setRepos(data.userRepos);
      };
  
      fetchUser();
    }, []);


  return (
    <div>
      {" "}
      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          View {user?.login}'s Github Repos
        </h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="py-2 px-4">Repo Id</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">View on GitHub</th>
            </tr>
          </thead>
          <tbody>
          {repos.map((repo) => (
              <tr key={repo.id} className="bg-gray-800 text-gray-300">
                <td className="py-2 px-4">{repo.id}</td>
                <td className="py-2 px-4">{repo.name}</td>
                <td className="py-2 px-4">{repo.private ? 'Private' : 'Public'}</td>
                <td className="py-2 px-4">{repo.description}</td>
                <td className="py-2 px-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReposTable;
