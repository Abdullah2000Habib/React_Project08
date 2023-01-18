import { faMapMarker, faPhotoFilm, faSmile, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import person from "../../assets/person/1.jpeg";
import style from "./style.module.css";
export default function Share() {
  return (
    <>
        <div className={style.share}>
          <div className={style.wrapper}>
            <div className={style.top}>
              <img className={style.profileImg} src={person} alt='person'/>
              <input className={style.shareInput} placeholder="What's in your mind ?"/>
            </div>
              <hr className={style.shareHr}/>
            <div className={style.bottom}>
              <div className={style.shareOptions}>
                <div className={style.option}>
                  <FontAwesomeIcon style={{color:"tomato"}} className={style.shareIcon} icon={faPhotoFilm}/>
                  <span className={style.optionText}>Photo or Video</span>
                </div>
                <div className={style.option}>
                  <FontAwesomeIcon style={{color:"blue"}} className={style.shareIcon} icon={faTag}/>
                  <span className={style.optionText}>Tag</span>
                </div>
                <div className={style.option}>
                  <FontAwesomeIcon style={{color:"green"}} className={style.shareIcon} icon={faMapMarker}/>
                  <span className={style.optionText}>Location</span>
                </div>
                <div className={style.option}>
                  <FontAwesomeIcon style={{color:"goldenrod"}} className={style.shareIcon} icon={faSmile}/>
                  <span className={style.optionText}>Feelings</span>
                </div>
              </div>
              <button className={style.button}>Share</button>
            </div>
          </div>
        </div>
    </>
  )
}
