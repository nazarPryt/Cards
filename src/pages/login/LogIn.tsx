import React from 'react';
import s from "./Login.module.scss"

const LogIn = () => {
    return (
        <section className={s.wrapper}>
            <h1>login page</h1>
            <div className={s.container}>
                <div>
                    <div className={s.left}></div>
                    <div className={s.right}></div>
                </div>
            </div>

        </section>
    );
};

export default LogIn;