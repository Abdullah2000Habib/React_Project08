import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import style from "./style.module.css";
export default function Feed() {
  return (
    <div className={style.feed}>
      <div className={style.wrapper}>
        <Share/>
        <Post/>
      </div>
    </div>
  )
}
