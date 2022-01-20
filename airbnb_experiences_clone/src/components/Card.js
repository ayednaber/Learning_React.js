// After completing our Navbar and Hero components, we will design our card.
// At first, our Card component was hard-coded, but now we will start using props in it to make it more dynamic.

import React from "react";
import star from '../images/star.png'
import cardPhoto from '../images/katie.png'

export default function Card(props) {
    console.log(props.cardElement.image)
    let badgeText
    if (props.cardElement.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.cardElement.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.cardElement.coverImg} className="card-img" />
            <div className="card-section">
                <img src={star} className="star-img" />
                <span className="card-rating">{props.cardElement.stats.rating}</span>
                <span className="card-review-count">({props.cardElement.stats.reviewCount}) • </span>
                <span className="country">{props.cardElement.location}</span>
            </div>
            <div className="card-title-section">
                <p className="card-title">{props.cardElement.title}</p>
                <p className="card-price"><span className="price">From ${props.cardElement.price}</span> / Person</p>
            </div>
        </div>
    )
}
