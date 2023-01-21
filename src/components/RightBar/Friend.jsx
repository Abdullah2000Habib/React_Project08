import React from 'react';
import style from "./style.module.css";
export default function Friend({profilePicture,username}) {
return (
    <>
        <li className={style.friend}>
            <div className={style.profileImgContainer}>
                <img className={style.profileImg} src={profilePicture} alt='person'/>
                <span className={style.online}></span>
            </div>
            <span className={style.userName}>{username}</span>
        </li>
    </>
)
}
