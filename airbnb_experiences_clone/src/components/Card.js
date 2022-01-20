// After completing our Navbar and Hero components, we will design our card.
// At first, our Card component was hard-coded, but now we will start using props in it to make it more dynamic.

import React from "react";
import star from '../images/star.png'
import cardPhoto from '../images/katie.png'

export default function Card(props) {
    // console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.image} className="card-img" />
            <div className="card-section">
                <img src={star} className="star-img" />
                <span className="card-rating">{props.rating}</span>
                <span className="card-review-count">({props.num_reviews}) • </span>
                <span className="country">{props.location}</span>
            </div>
            <div className="card-title-section">
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="price">From ${props.price}</span> / Person</p>
            </div>
        </div>
    )
}
