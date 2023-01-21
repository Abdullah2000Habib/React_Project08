import React from 'react';
import person1 from "../../assets/person/1.jpeg";
import person2 from "../../assets/person/2.jpeg";
import person3 from "../../assets/person/3.jpeg";
import person4 from "../../assets/person/4.jpeg";
import person5 from "../../assets/person/5.jpeg";
import person6 from "../../assets/person/6.jpeg";
import style from "./style.module.css";
export default function RightProfileBar() {
return (
    <>
        <div className={style.rightProfileBar}>
            <div className={style.wrapper}>
                <h4 className={style.rightBarTitle}>User Information</h4>
                <div className={style.rightBarInfo}>
                    <div className={style.rightBarInfoItem}>
                        <span className={style.rightBarInfoKey}>City:</span>
                        <span className={style.rightBarInfoValue}>New York</span>
                    </div>
                    <div className={style.rightBarInfoItem}>
                        <span className={style.rightBarInfoKey}>From:</span>
                        <span className={style.rightBarInfoValue}>Madrid</span>
                    </div>
                    <div className={style.rightBarInfoItem}>
                        <span className={style.rightBarInfoKey}>Relationship:</span>
                        <span className={style.rightBarInfoValue}>Single</span>
                    </div>
                </div>
                <h4 className={style.rightBarTitle}>User Friends</h4>
                <div className={style.rightBarFollowings}>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person1} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person2} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person3} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person4} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person5} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                    <div className={style.rightBarFollowing}>
                        <img className={style.rightBarFollowingImg} src={person6} alt=''/>
                        <span className={style.rightBarFollowingName}>John Carter</span>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
