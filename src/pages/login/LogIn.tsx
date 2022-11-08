import React, { useState } from 'react'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SuperInputText from '../../common/components/SuperInputText/SuperInputText'

import loginBg from './../../assets/img/login_bg.jpg'
import s from './Login.module.scss'

const LogIn = () => {
    type accordionType = 'login' | 'register' | 'forgotPass'

    const [accordion, setAccordion] = useState<accordionType>('login')

    return (
        <section className={s.wrapper}>
            <picture>
                <source media="(min-width:650px)" srcSet={loginBg} />
                <source media="(min-width:465px)" srcSet={loginBg} />
                <img src={loginBg} alt="Flowers" />
            </picture>
            <h1>login page</h1>
            <div className={s.container}>
                <div className={s.formWrap}>
                    <div className={s.left}>
                        <div
                            className={`${s.button} ${accordion === 'login' ? s.buttonActive : ''}`}
                            onClick={() => setAccordion('login')}
                        >
                            <FontAwesomeIcon icon={faUser} className={s.iconTab} />
                            <span>login</span>
                        </div>
                        <div
                            className={`${s.button} ${
                                accordion === 'register' ? s.buttonActive : ''
                            }`}
                            onClick={() => setAccordion('register')}
                        >
                            <FontAwesomeIcon icon={faUser} className={s.iconTab} />
                            <span>Register</span>
                        </div>
                        <div
                            className={`${s.button} ${
                                accordion === 'forgotPass' ? s.buttonActive : ''
                            }`}
                            onClick={() => setAccordion('forgotPass')}
                        >
                            <FontAwesomeIcon icon={faUser} className={s.iconTab} />
                            <span>Forgot Password?</span>
                        </div>
                    </div>
                    <div className={s.right}>
                        {accordion === 'login' && (
                            <div className={s.login}>
                                <h3>Login Here</h3>
                                <SuperInputText type={'email'} />
                                <SuperInputText type={'password'} />
                                <input type="password" />
                            </div>
                        )}
                        {accordion === 'register' && <div className={s.register}> register</div>}
                        {accordion === 'forgotPass' && (
                            <div className={s.forgotPassword}>forgotPassword</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn
