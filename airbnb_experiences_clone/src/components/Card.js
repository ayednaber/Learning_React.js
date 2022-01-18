// After completing our Navbar and Hero components, we will design our card.

import React from "react";
import star from '../images/star.png'
import cardPhoto from '../images/katie.png'

function CardPhoto() {
    return (
        <img src={cardPhoto} className="card-img" />
    )
}

function CardRating() {
    return (
        <div className="card-section">
            <img src={star} className="star-img" />
            <span className="card-rating">5.0</span>
            <span className="card-review-count">(6) • </span>
            <span className="country">USA</span>
        </div>
    )
}

function CardTitle() {
    return (
        <div className="card-title-section">
            <p className="card-title">Life Lessons with Katie Zaferes</p>
            <p className="card-price"><span className="price">From $136</span> / Person</p>
        </div>
    )
}

export default function Card() {
    return (
        <div className="card">
            <CardPhoto />
            <CardRating />
            <CardTitle />
        </div>
    )
}
