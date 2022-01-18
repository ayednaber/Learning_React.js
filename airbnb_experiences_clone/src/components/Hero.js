import React from "react"
import photo_grid from '../images/photo_grid.png'

function HeroText() {
    return (
        <div className="hero-section">
            <h1 className="hero-header">Online Experiences</h1>
            <h3 className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h3>
        </div>
    )
}

export default function Hero() {
    return (
        <div className="photo-grid">
            <img src={photo_grid} className="photo-grid-img"/>
            <HeroText />
        </div>
    )
}