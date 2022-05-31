import React from 'react'
import {AffairType, filterAffairs} from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: 'React', priority: 'HIGH'},
        {_id: 2, name: 'anime', priority: 'LOW'},
        {_id: 3, name: 'games', priority: 'LOW'},
        {_id: 4, name: 'work', priority: 'HIGH'},
        {_id: 5, name: 'html & css', priority: 'MIDDLE'},
        {_id: 6, name: 'porn', priority: 'LOW'},
    ]
})

test('filter by all', () => {
    const newState = filterAffairs(initialState, 'all')
    expect(newState.length).toBe(6)
})
test('filter by high', () => {
    const newState = filterAffairs(initialState, 'HIGH')
    expect(newState.length).toBe(2)
})
test('filter by middle', () => {
    const newState = filterAffairs(initialState, 'MIDDLE')
    expect(newState.length).toBe(1)
})
test('filter by low', () => {
    const newState = filterAffairs(initialState, 'LOW')
    expect(newState.length).toBe(3)
})
