import React from 'react';
import style from "./style.module.css";
export default function CloseFriends({profilePicture,username}) {
return (
    <>
            <li className={style.friend}>
            <img className={style.friendImg} src={profilePicture} alt='friend1'/>
            <span className={style.friendName}>{username}</span>
            </li>
    </>        
)
}
