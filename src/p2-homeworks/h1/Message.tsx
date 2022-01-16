import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <img src={props.avatar} className={s.image} alt="avatar"/>
            <div className={s.angle}/>
            <div className={s.bodyMessage}>
                <h4 className={s.name}>{props.name}</h4>
                <p className={s.message}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}
