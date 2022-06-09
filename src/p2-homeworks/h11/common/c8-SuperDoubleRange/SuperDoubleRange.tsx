import React from 'react';
import {Box, Slider} from '@mui/material';
import s from './SuperDoubleRange.module.css'

export type SuperDoubleRangePropsType = {
    value: number | number[]
    onChangeDoubleRange: (newValue: number | number[]) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {

    const onChangeHandler = ((event: Event, newValue: number | number[]) => {
        props.onChangeDoubleRange(newValue)
    })

    return (
        <div>
            <Box sx={{width: 300}}>
                <Slider track={false}
                        min={1}
                        max={100}
                        step={1}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        className={s.range}
                        value={props.value}
                        onChange={onChangeHandler}
                />
            </Box>
        </div>
    );
};

export default SuperDoubleRange;