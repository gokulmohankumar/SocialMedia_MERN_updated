import React from 'react'
import { Link } from 'react-router-dom'

const FriendList = ({friend}) => {
  return (
    <li className='flex'>
   <img src={friend.profilePicture} alt="" className='w-[32px] h-[32px] mt-[-7px] mr-[5px] ml-[5px] rounded-full object-cover'/>
   <Link to={`/profile/${friend.username}`}>
    <span>{friend.username}</span>
   </Link>
</li>
  )
}

export default FriendList
