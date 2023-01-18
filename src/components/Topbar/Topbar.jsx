import { faBell, faMessage, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import person from "../../assets/person/1.jpeg";
import style from "./style.module.css";
export default function Topbar() {
return (
    <>
        <div className={style.container}>
            <div className={style.left}>
                <span className={style.logo}>Social</span>
            </div>
            <div className={style.center}>
                <div className={style.searchBar}>
                    <FontAwesomeIcon className={style.searchIcon} icon={faSearch}/>
                        <input placeholder='Search for friend, post or video' className={style.searchInput}></input>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.links}>
                    <span className={style.link}>Homepage</span>
                    <span className={style.link}>Timeline</span>
                </div>
                <div className={style.icons}>
                    <div className={style.icon}>
                        <FontAwesomeIcon className={style.awesomeIcon} icon={faUser}/>
                        <span className={style.iconBadge}>1</span>
                    </div>
                    <div className={style.icon}>
                        <FontAwesomeIcon className={style.awesomeIcon} icon={faMessage}/>
                        <span className={style.iconBadge}>2</span>
                    </div>
                    <div className={style.icon}>
                        <FontAwesomeIcon className={style.awesomeIcon} icon={faBell}/>
                        <span className={style.iconBadge}>1</span>
                    </div>
                </div>
                <img className={style.topBarImg} src={person} alt='person'/>
            </div>
        </div>
    </>
)
}
