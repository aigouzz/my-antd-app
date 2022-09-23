import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "@src/components/Header"
import { Link } from "react-router-dom"

export function ListPage() {
    return (
        <>
        <Header></Header>
        <div className="list-wrap">
            <span>this is list page</span>
            <div className="list-nav">
                <Link to={'/list/news'}>news</Link>
                <Link to={'/list/favor'}>favor</Link>
            </div>
        </div>
        <div className="list-body">
            <Outlet></Outlet>
        </div>
        </>
    )
}