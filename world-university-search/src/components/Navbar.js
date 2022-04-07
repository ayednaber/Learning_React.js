import React from "react"
import { FaGlobe } from "react-icons/fa"

export default function Navbar() {
    return (
        <div className="navbar">
            <FaGlobe className="globe" />
            <h2 className="navbar-text">World University Search</h2>
        </div>
    )
}