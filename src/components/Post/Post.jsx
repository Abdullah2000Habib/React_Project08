import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import heart from "../../assets/heart.png";
import likepng from "../../assets/like.png";
import style from "./style.module.css";
export default function Post({date,profilePicture,username,desc,photo,like,comment}) {
  const [liked,setLiked] = useState(like);
  const [isliked,setIsLiked] = useState(false);

  const likeHandler =()=>{
    setLiked((prev)=>isliked?prev-1:prev+1);
    setIsLiked((prev)=>!prev)
  }
  return (
    <>
        <div className={style.post}>
          <div className={style.wrapper}>
            <div className={style.top}>
              <div className={style.topLeft}>
                <img className={style.profileImg} src={profilePicture} alt="person"/>
                <span className={style.postUserName}>{username}</span>
                <span className={style.postDate}>{date}</span>
              </div>
              <div className={style.topRight}>
                <FontAwesomeIcon icon={faEllipsisV}/>
              </div>
            </div>
            <div className={style.center}>
              <span className={style.postText}>{desc}</span>
              <img src={photo} alt="post1" className={style.postImg} />
            </div>
            <div className={style.bottom}>
              <div className={style.postBottomLeft}>
                <img onClick={likeHandler} className={style.likeIcon} src={heart}  alt="" />
                <img onClick={likeHandler} className={style.likeIcon} src={likepng} alt="" />
                <span className={style.postLikeCounter}>{liked} people like it</span>
              </div>
              <div className={style.postBottomRight}>
                <span className={style.postCommentText}>{comment} comments</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
