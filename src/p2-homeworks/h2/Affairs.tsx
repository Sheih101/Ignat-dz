import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (s: FilterType) => void;
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('HIGH')
    const setMiddle = () => props.setFilter('MIDDLE')
    const setLow = () => props.setFilter('LOW')

    return (
        <div className={s.someClass}>
            {mappedAffairs}
            <div className={s.filterButtonsContainer}>
                <SuperButton onClick={setAll} className={s.button}>All</SuperButton>
                <SuperButton onClick={setHigh} className={s.button}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={s.button}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={s.button}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
