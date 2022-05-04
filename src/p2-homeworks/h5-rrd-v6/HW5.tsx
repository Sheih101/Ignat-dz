import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            <HashRouter basename={'Ignat-dz'}>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
