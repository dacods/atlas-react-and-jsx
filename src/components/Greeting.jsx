import React from "react";
import day from '../assets/day.svg'
import night from '../assets/night.svg'
import evening from '../assets/evening.svg'

function Greeting() {
    let content;
    let image;
    const hours = new Date().getHours();

    switch (true) {
        case (hours >= 6 && hours < 12):
            content = "Good Morning!";
            image = day;
            break;
        case (hours >= 12 && hours < 17):
            content = "Good Afternoon!";
            image = day;
            break;
        case (hours >= 17 && hours < 21):
            content = "Good Evening!";
            image = evening;
            break;
        default:
            content = "Good Night!";
            image = night;
    }

    return (
        <h1 className="greeting">
            <img src={image}></img>
            {content}
        </h1>)
}

export default Greeting;