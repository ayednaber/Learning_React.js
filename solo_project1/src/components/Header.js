// This Header component will contain the image, as well as the name, title, and buttons.

import React from "react"
import personal_photo from "../images/personal_photo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

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
            <a href="https://ayednaber.github.io" target="__blank">ayednaber.github.io</a>
        </div>
    )
}

function Buttons() {
    return (
        <div className="header-buttons">
            <button className="email-button" onClick={(e) => {e.preventDefault(); window.open('mailto:nabera@mcmaster.ca', '__blank')}}><MdEmail/><a>Email</a></button>
            <button className="linkedin-button" onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/ayed-naber/', '__blank')}}><FaLinkedin/><a>LinkedIn</a></button>
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