import Nav from "./Nav"
import React from "react"

export const Layouts = ({ children }) => {
    return(
        <>
        <Nav />
        <div>{ children }</div>
        </>
    )
}