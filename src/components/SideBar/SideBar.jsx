import { faBookmark, faBriefcase, faCalendar, faFeed, faGraduationCap, faMessage, faPlayCircle, faQuestion, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CloseFriends from './CloseFriends';
import { Users } from './Data';
import style from "./style.module.css";
export default function SideBar() {
  return (
    <div className={style.sideBar}>
      <div className={style.wrapper}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faFeed}/>
            <span className={style.listItemText}>Feed</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faMessage}/>
            <span className={style.listItemText}>Chats</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faPlayCircle}/>
            <span className={style.listItemText}>Videos</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faUserGroup}/>
            <span className={style.listItemText}>Groups</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faBookmark}/>
            <span className={style.listItemText}>Bookmarks</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faQuestion}/>
            <span className={style.listItemText}>Questions</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faBriefcase}/>
            <span className={style.listItemText}>Jobs</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faCalendar}/>
            <span className={style.listItemText}>Events</span>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon className={style.icon} icon={faGraduationCap}/>
            <span className={style.listItemText}>Courses</span>
          </li>
        </ul>
        <button className={style.button}>Show More</button>
        <hr className={style.SideBarHr}/>
        <ul className={style.friendList}>
          {Users.map((user)=>{
            return (
            <CloseFriends key={user.id} profilePicture={user.profilePicture} username={user.username}/>
            )
          })}
        </ul>
      </div>
    </div>  
  )
}
