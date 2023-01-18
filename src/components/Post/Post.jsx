import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";
import person1 from "../../assets/person/1.jpeg";
import post1 from "../../assets/post/1.jpeg";
import style from "./style.module.css";
export default function Post() {
  return (
    <>
        <div className={style.post}>
          <div className={style.wrapper}>
            <div className={style.top}>
              <div className={style.topLeft}>
                <img className={style.profileImg} src={person1} alt="person"/>
                <span className={style.postUserName}>Safak kocaglu</span>
                <span className={style.postDate}> 5 mins ago</span>
              </div>
              <div className={style.topRight}>
                <FontAwesomeIcon icon={faEllipsisV}/>
              </div>
            </div>
            <div className={style.center}>
              <span className={style.postText}>It's my first post</span>
              <img src={post1} alt="post1" className={style.postImg} />
            </div>
            <div className={style.bottom}>
              <div className={style.postBottomLeft}>
                <img className={style.likeIcon} src={heart}  alt="" />
                <img className={style.likeIcon} src={like} alt="" />
                <span className={style.postLikeCounter}>32 people like it</span>
              </div>
              <div className={style.postBottomRight}>
                <span className={style.postCommentText}>9 comments</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
