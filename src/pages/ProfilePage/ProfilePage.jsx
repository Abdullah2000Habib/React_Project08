import React from 'react';
import person from "../../assets/person/7.jpeg";
import cover from "../../assets/post/3.jpeg";
import Feed from '../../components/Feed/Feed';
import RightProfileBar from '../../components/RightProfileBar/RightProfileBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/Topbar/Topbar';
import style from "./style.module.css";
export default function ProfilePage() {
  return (
    <>
        <Topbar/>
        <div className={style.container}>
          <SideBar/>
          <div className={style.profileRight}>
            <div className={style.profileRightTop}>
              <div className={style.profileCover}>
                <img className={style.profileCoverImg} src={cover} alt=''/>
                <img className={style.profileUserImg} src={person} alt=''/>
              </div>
              <div className={style.profileInfo}>
                <h4 className={style.profileInfoName}>Safak Kocaoglu</h4>
                <span className={style.profileInfoDesc}>Hello my friends</span>
              </div>
            </div>
            <div className={style.profileRightBottom}>
              <Feed/>
              <RightProfileBar/>
            </div>
          </div>
        </div>
    </>
  )
}
