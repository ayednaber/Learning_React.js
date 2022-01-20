import React from "react"
import { FaGlobe } from "react-icons/fa"

export default function Navbar() {
    return (
        <div className="navbar">
            <FaGlobe className="globe" />
            <h2 className="navbar-text">my travel journal.</h2>
        </div>
    )
}