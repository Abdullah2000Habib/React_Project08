import React from 'react';
import style from "./style.module.css";
export default function RegisterPage() {
return (
    <>
        <div className={style.login}>
            <div className={style.loginWrapper}>
                <div className={style.loginLeft}>
                    <h3 className={style.loginLogo}>Social</h3>
                    <span className={style.loginDesc}>Connect With Friends and the World around you on social</span>
                </div>
                <div className={style.loginRight}>
                    <div className={style.loginBox}>
                        <input className={style.loginInput} placeholder='username'/>
                        <input className={style.loginInput} placeholder='email'/>
                        <input className={style.loginInput} placeholder='password'/>
                        <input className={style.loginInput} placeholder='password again'/>
                        <button className={style.loginButton}>Login</button>
                        <span className={style.loginForgot}>Forgot Password?</span>
                        <button className={style.loginRegisterButton}>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
