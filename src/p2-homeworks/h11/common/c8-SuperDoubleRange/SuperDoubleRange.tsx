import React from 'react'
import 'rc-slider/assets/index.css'
import s from './SuperDoubleRange.module.css'
import Slider from 'rc-slider'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: [number, number]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {

    const onChangeCallback = ((value: number | number[]) => {
        onChangeRange && onChangeRange(value)
    })

    return (
        <>
            <Slider
                className={s.doubleRange}
                range={true}
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                onChange={onChangeCallback}
                defaultValue={value}
                allowCross={false}
                trackStyle={{
                    height: '7.5px',
                    backgroundColor: '#69f03c'
                }}
                railStyle={{
                    height: '7.5px',
                    backgroundColor: '#69f03c'
                }}
                handleStyle={{
                    backgroundColor: '#0075ff',
                    border: 'none',
                    opacity: '1',
                    padding: '8px',
                    height: '14.5px',
                    width: '14.5px'
                }}
            />
        </>
    )
}

export default SuperDoubleRange
