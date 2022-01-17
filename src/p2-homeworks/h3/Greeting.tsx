import React from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void
    addUser: () => void  // need to fix any
    addUserKey: (e: number) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserKey, error, totalUsers}
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <SuperInputText value={name}
                   onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}
                   onKeyPress={(e) => addUserKey(e.charCode)}
            />
            <SuperButton onClick={addUser}>Add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
