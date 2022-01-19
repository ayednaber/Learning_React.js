// After completing our Navbar and Hero components, we will design our card.
// At first, our Card component was hard-coded, but now we will start using props in it to make it more dynamic.

import React from "react";
import star from '../images/star.png'
import cardPhoto from '../images/katie.png'

export default function Card() {
    return (
        <div className="card">
            <img src={cardPhoto} className="card-img" />
            <div className="card-section">
                <img src={star} className="star-img" />
                <span className="card-rating">5.0</span>
                <span className="card-review-count">(6) • </span>
                <span className="country">USA</span>
            </div>
            <div className="card-title-section">
                <p className="card-title">Life Lessons with Katie Zaferes</p>
                <p className="card-price"><span className="price">From $136</span> / Person</p>
            </div>
        </div>
    )
}
