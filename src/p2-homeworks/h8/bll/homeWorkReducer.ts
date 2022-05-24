import {UserType} from '../HW8';

type ActionsType = SortUpACType | SortDownACType | Check18ACType

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = state.map(m => ({...m}))
            if (action.payload === 'up') {
                stateCopy = stateCopy.sort((a, b) => b.age - a.age)
            }
            if (action.payload === 'down') {
                stateCopy = stateCopy.sort((a, b) => a.age - b.age)
            }
            return stateCopy
        }
        case 'check': {
            let stateCopy = state.map(m => ({...m}))
            return stateCopy.filter((f: UserType) => f.age >= 18)
        }
        default:
            return state
    }
}

type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

type SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

type Check18ACType = ReturnType<typeof check18AC>
export const check18AC = () => {
    return {
        type: 'check',
        payload: '18'
    } as const
}

