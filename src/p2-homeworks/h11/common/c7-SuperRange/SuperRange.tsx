import React from 'react';
import {Box, Slider} from '@mui/material';
import s from './SuperRange.module.css'

export type SuperRangePropsType = {
    value: number | number[]
    onChangeRange: (newValue: number | number[]) => void
}

const SuperRange = (props: SuperRangePropsType) => {

    const onChangeHandler = (event: Event, newValue: number | number[]) => {
        props.onChangeRange(newValue)
    }

    return (
        <div>
            <Box sx={{width: 300}}>
                <Slider defaultValue={1}
                        min={1}
                        max={100}
                        step={1}
                        track={false}
                        aria-label="Small"
                        className={s.range}
                        valueLabelDisplay="auto"
                        value={props.value}
                        onChange={onChangeHandler}
                />
            </Box>
        </div>
    );
};

export default SuperRange;