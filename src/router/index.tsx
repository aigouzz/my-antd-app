import React from "react"
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {Home} from '../view/Home'
import {ListPage} from '../view/ListPage'
import {ListNews} from '@src/components/List/ListNews'
import {ListFavor} from '@src/components/List/ListFavor'

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/list' element={<ListPage />} >
                    <Route path='news' element={<ListNews />}></Route>
                    <Route path='favor' element={<ListFavor />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}