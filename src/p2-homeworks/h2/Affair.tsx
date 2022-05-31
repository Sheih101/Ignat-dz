import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affair}>
            <div><SuperButton onClick={deleteCallback}>X</SuperButton></div>
            <div>{props.affair.name}</div>
            <div>[{props.affair.priority}]</div>
        </div>
    )
}

export default Affair
