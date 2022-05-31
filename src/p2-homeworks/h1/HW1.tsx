import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://i.pinimg.com/1200x/e6/14/45/e614453351ce026b7d4b3e496b46d833.jpg',
    name: 'Reiner Braun',
    message: 'Просто делай, что должен и двигайся вперёд. Что нам ещё остаётся?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            Homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
