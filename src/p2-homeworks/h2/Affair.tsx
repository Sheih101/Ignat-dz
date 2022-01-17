import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={s.affair}>
            {/*<button onClick={deleteCallback}>X</button>*/}
            <SuperButton onClick={deleteCallback}>X</SuperButton>
            {props.affair.name} ({props.affair.priority})
        </div>
    )
}

export default Affair
