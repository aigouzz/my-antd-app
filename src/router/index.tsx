import React from "react"
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {Home} from '../view/Home'
import {ListPage} from '../view/ListPage'

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/list' element={<ListPage />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}