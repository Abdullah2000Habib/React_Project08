import React from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/Topbar/Topbar';
import style from "./style.module.css";
export default function HomePage() {
  return (
    <>
        <Topbar/>
        <div className={style.container}>
          <SideBar/>
          <Feed/>
          <RightBar/>
        </div>
    </>
  )
}
