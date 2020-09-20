import React, { useState, useEffect } from "react";

import './DateTime.css'

function getCurrentDate() {
    return new Date()
}

export default function DateTime() {
    const [date, setDate] = useState(getCurrentDate())

    // useEffect(() => {
    //     setDate(getCurrentDate()) // NAIVE IMPLEMENTATION: infinite loop, since no dep
    // })

    // also works with setInterval
    useEffect(() => {
        // called every render which happens every second
        const timeOut = setTimeout(() => setDate(getCurrentDate()), 1000)

        return () => {
            console.log("cleanup") // also called every second
            clearTimeout(timeOut)
        }
    })

    return (
        <div className="container">
            <div className="time">
                <div className="big">
                    {date.getHours()}
                </div>
                <div className="big">
                    {date.getMinutes()}
                </div>
                <div className="big">
                    {date.getSeconds()}
                </div>
            </div>
            <div className="date">
                <div className="big">
                    {date.getDate()}
                </div>
                <div className="big">
                    {date.toLocaleString('default', { month: 'long' })}
                </div>
                <div className="big">
                    {date.getFullYear()}
                </div>
            </div>
        </div>

    )

}