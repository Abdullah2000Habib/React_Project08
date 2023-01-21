import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import { Posts } from './Data';
import style from "./style.module.css";
export default function Feed() {
  return (
    <div className={style.feed}>
      <div className={style.wrapper}>
        <Share/>
        {Posts.map((item)=>{
          return(<Post key={item.id} comment={item.comment} date={item.date} desc={item.desc} like={item.like} photo={item.photo} profilePicture={item.profilePicture} username={item.username} />)
        })}
      </div>
    </div>
  )
}
