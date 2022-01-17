import React from 'react'
import s from './Header.module.css'
import {PATH} from "./RoutesComponent";
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
