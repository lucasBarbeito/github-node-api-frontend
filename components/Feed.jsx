"use client";

import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import "../styles/Feed.css"; 


const Feed = () => {
  const [users, setUsers] = useState([]);
  const [prevPage, setPrevPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://lucbar-github-node-api.onrender.com/users?since=${currentPage === 1 ? 0 : currentPage}`
      );
      const data = await response.json();

      setUsers(data.users);
      setNextPage(data.nextPageLink);
      if (currentPage === 1) {
        setPrevPage(0);
      }

    };

    fetchUsers();
  }, [currentPage]);


  const handlePreviousPageNavigation = () => {
    setCurrentPage(prevPage)
  
  }

  const handleNextPageNavigation = () => {
    setPrevPage(currentPage === 0 ? currentPage + 1 : currentPage);
    setCurrentPage(nextPage);
  }

  return (
    <section className="feed">
      <UserCardList data={users} handleTagClick={() => {}} />
      <div className="pagination_buttons">
        {prevPage !== 0  && (
          <button
            className="pagination_button"
            onClick={() => handlePreviousPageNavigation()}
          >
            Go Back
          </button>
        )}
        {nextPage !== null && (
          <button
            className="pagination_button"
            onClick={() => handleNextPageNavigation()}
          >
            Go Forward
          </button>
        )}
      </div>
    </section>
  );
};

const UserCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 user_layout">
      {data.map((user) => (
        <UserCard key={user.id} user={user} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default Feed;
