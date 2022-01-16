import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: string) => {
        setName(e)
        setError('')
    }
    const addUser = () => {
        if (name === '') {
            setError('Name is require!')
        } else {
            alert(`Hello ${name}!`)
            addUserCallback(name)
        }
        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <div className={s.someClass}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
