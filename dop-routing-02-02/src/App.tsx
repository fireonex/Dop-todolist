import React, {useContext, useEffect, useState} from 'react';
import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles'
import {ModelCrossContext} from "./context/ModelProvider";
import {useWindowSize} from "./hooks/useWindowSize";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
} as const

function App() {
    const navigate = useNavigate()

    const onClickBackHandler = () => {
        navigate(-1)
    }

    const {model} = useContext(ModelCrossContext)


    const size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {
                    size > 1000
                        ? <div className={styles.nav}>
                            <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                            {
                                !model && <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                            }
                            <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={'/protected'}>Protected Rage</NavLink></S.NavWrapper>
                        </div>
                        : <div></div>
                }

                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <Link to="/adidas" className={styles.LinkLikeButton}>ГЛАВНАЯ СТРАНИЦА (ADIDAS)</Link>
                        <button onClick={onClickBackHandler} className={styles.ButtonLikeLink}>НАЗАД</button>

                    </div>

                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



