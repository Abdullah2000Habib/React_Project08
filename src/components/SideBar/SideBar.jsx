import { faBookmark, faBriefcase, faCalendar, faFeed, faGraduationCap, faMessage, faPlayCircle, faQuestion, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import friend1 from "../../assets/person/2.jpeg";
import friend2 from "../../assets/person/3.jpeg";
import friend3 from "../../assets/person/4.jpeg";
import friend4 from "../../assets/person/5.jpeg";
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
          <li className={style.friend}>
            <img className={style.friendImg} src={friend1} alt='friend1'/>
            <span className={style.friendName}>Jane Doe</span>
          </li>
          <li className={style.friend}>
            <img className={style.friendImg} src={friend2} alt='friend2'/>
            <span className={style.friendName}>Jane Doe</span>
          </li>
          <li className={style.friend}>
            <img className={style.friendImg} src={friend3} alt='friend3'/>
            <span className={style.friendName}>Jane Doe</span>
          </li>
          <li className={style.friend}>
            <img className={style.friendImg} src={friend4} alt='friend4'/>
            <span className={style.friendName}>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>  
  )
}
