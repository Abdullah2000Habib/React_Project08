import React from 'react';
import ad from "../../assets/ad.png";
import gift from "../../assets/gift.png";
import person from "../../assets/person/3.jpeg";
import style from "./style.module.css";
export default function RightBar() {
  return (
    <div className={style.rightBar}>
      <div className={style.wrapper}>
        <div className={style.birthdayContainer}>
          <img className={style.birthdayImg} src={gift} alt='gift'/>
          <span className={style.birthdayText}>{' '}<b>Pola Foster</b>  and  <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className={style.rightBarAd} src={ad} alt='ad'/>
        <h4 className={style.rightBarTitle}>Online Friends</h4>
        <ul className={style.friendsList}>
          <li className={style.friend}>
            <div className={style.profileImgContainer}>
              <img className={style.profileImg} src={person} alt='person'/>
              <span className={style.online}></span>
            </div>
            <span className={style.userName}>John Carter</span>
          </li>
          <li className={style.friend}>
            <div className={style.profileImgContainer}>
              <img className={style.profileImg} src={person} alt='person'/>
              <span className={style.online}></span>
            </div>
            <span className={style.userName}>John Carter</span>
          </li>
          <li className={style.friend}>
            <div className={style.profileImgContainer}>
              <img className={style.profileImg} src={person} alt='person'/>
              <span className={style.online}></span>
            </div>
            <span className={style.userName}>John Carter</span>
          </li>
          <li className={style.friend}>
            <div className={style.profileImgContainer}>
              <img className={style.profileImg} src={person} alt='person'/>
              <span className={style.online}></span>
            </div>
            <span className={style.userName}>John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
