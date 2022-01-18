// This Header component will contain the image, as well as the name, title, and buttons.

import React from "react"
import personal_photo from "../images/personal_photo.jpg"

function ImageContainer() {
    return (
        <div className="image-container">
            <img src={personal_photo} alt="Personal Photo" />
        </div>
    )
}

function Info() {
    return (
        <div className="info-section">
            <h1>Ayed Naber</h1>
            <h3>Frontend Developer</h3>
            <a href="https://ayednaber.github.io">ayednaber.github.io</a>
        </div>
    )
}

function Buttons() {
    return (
        <div className="header-buttons">
            <button className="email-button">Email</button>
            <button className="linkedin-button">LinkedIn</button>
        </div>
    )
}

export default function Header() {
    return (
        <div className="header-container">
            <ImageContainer />
            <Info />
            <Buttons />
        </div>
    )
}