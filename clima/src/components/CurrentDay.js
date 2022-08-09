import { useState } from "react";

const currentDay = () => {
    return (
        <article>
            <h1>Todays weather:</h1>
            <h3>Date</h3>
            <p>Temp</p>
            <p>Wind</p>
            <p>Humidity</p>
        </article>
    )
}

export default currentDay