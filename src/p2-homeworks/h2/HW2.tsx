import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'HIGH' | 'MIDDLE' | 'LOW'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'REACT', priority: 'HIGH'},
    {_id: 2, name: 'ANIME', priority: 'LOW'},
    {_id: 3, name: 'GAMES', priority: 'LOW'},
    {_id: 4, name: 'WORK', priority: 'HIGH'},
    {_id: 5, name: 'HTML & CSS', priority: 'MIDDLE'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else {
        return affairs.filter(f => f.priority === filter)
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return (affairs.filter(f => f._id !== _id))
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            Homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            <hr/>
        </div>
    )
}

export default HW2
