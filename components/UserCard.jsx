'use client'

import {useState} from "react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";


import React from 'react'
import "../styles/UserCard.css"; 


const UserCard = ({user, handleTagClick}) => {

  const pathName = usePathname();
  const router = useRouter()

  return (
    <div className="user_card">
        <div className="flex justify-between items-start gap-5">
            <div className=" flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <Image
                    src={user.avatar_url}
                    alt="user_image"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                />
                <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-white-900">{user.login}</h3>
                </div>
            </div>
        </div>

        {/* <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => {handleTagClick && handleTagClick(post.tag)}}
        >
            #{post.tag}
        </p> */}

    </div>
)
}

export default UserCard