import React, { useState, useEffect } from "react";
import "./TimeStyle.css"
import { getCurrentTime } from "./utils";

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime())
 
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(getCurrentTime)
        }, 1000)

        return () => clearTimeout(timer);
    })

    return (
        <div className="CurrentTime">
            {currentTime}
        </div>
    )

}
