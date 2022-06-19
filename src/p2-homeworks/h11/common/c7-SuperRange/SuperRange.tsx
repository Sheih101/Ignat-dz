import React from 'react'
import 'rc-slider/assets/index.css'
import s from './SuperRange.module.css'
import Slider from 'rc-slider';


type SuperRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (props) => {

    const onChangeCallback = ((value: number | number[]) => {
        props.onChangeRange && props.onChangeRange(value)
    })

    return (
        <>
            <Slider className={s.range}
                    onChange={onChangeCallback}
                    value={props.value}
                    trackStyle={{
                        height: '7.5px',
                        backgroundColor: '#0075ff'
                    }}
                    railStyle={{height: '7.5px',}}
                    handleStyle={{
                        backgroundColor: '#0075ff',
                        border: 'none',
                        opacity: '1',
                        padding: '8px',
                        height: '14.5px',
                        width: '14.5px'
                    }}
            />
            {/* <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                value={restProps.value}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />*/}
        </>
    )
}

export default SuperRange
