import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRange = (newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        } else {
            setValue1(newValue)
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.container}>
                <div>
                    <span className={s.value}>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeRange}
                    />
                </div>
                <div>
                    <span className={s.value}>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                        step={1}
                        min={0}
                        max={100}
                        disabled={false}
                    />
                    <span className={s.value}>{value2}</span>
                </div>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
