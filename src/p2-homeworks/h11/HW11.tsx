import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number[]>([20, 60])

    useEffect(() => {
        if (value1 !== value2[0]) {
            setValue1(value2[0])
        }
    }, [value1, value2])

    const onChangeRange = (newValue: number | number[]) => {
        setValue1(newValue as number)
    }
    const onChangeDoubleRange = (newValue: number | number[]) => {
        setValue2(newValue as number[])
    }
    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.container}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeRange}
                    />
                </div>
                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={value2}
                        onChangeDoubleRange={onChangeDoubleRange}
                    />
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
