import React from "react"
import { GoLocation } from 'react-icons/go'

export default function Location(props) {
    console.log(props.locationElem)
    return (
        <div className="location-container">
            <img src={props.locationElem.imageUrl} className="location-image" />
            <div className="location-point">
                <GoLocation className="loc" />
                <p className="country-name">{props.locationElem.location}</p>
                <a href={props.locationElem.googleMapsUrl} className="google-maps">View on Google Maps</a>
            </div>
            <div className="location-info">
                <h1 className="location-name">{props.locationElem.title}</h1>
                <p className="location-date">{props.locationElem.startDate} - {props.locationElem.endDate}</p>
                <p className="location-desc">{props.locationElem.description}</p>
            </div>
            <hr className="hr" />
        </div>
    )
}