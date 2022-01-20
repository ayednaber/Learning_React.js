import React from "react"
import { GoLocation } from 'react-icons/go'

export default function Location() {
    return (
        <div className="location-container">
            <img src="https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="location-image" />
            <div className="location-point">
                <GoLocation className="loc" />
                <p className="country-name">JAPAN</p>
                <a href="https://goo.gl/maps/vBEsEPhvCc9eyxND9" className="google-maps">View on Google Maps</a>
            </div>
            <div className="location-info">
                <h1 className="location-name">Mount Fuji</h1>
                <p className="location-date">12 Jan 2021 - 24 Jan 2021</p>
                <p className="location-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            <hr className="hr" />
        </div>
    )
}