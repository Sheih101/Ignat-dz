import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void
    addUser: () => void  // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
