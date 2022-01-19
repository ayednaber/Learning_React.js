// After completing our Navbar and Hero components, we will design our card.
// At first, our Card component was hard-coded, but now we will start using props in it to make it more dynamic.

import React from "react";
import star from '../images/star.png'
import cardPhoto from '../images/katie.png'

export default function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={props.image} className="card-img" />
            <div className="card-section">
                <img src={star} className="star-img" />
                <span className="card-rating">{props.rating}</span>
                <span className="card-review-count">({props.num_reviews}) • </span>
                <span className="country">{props.country}</span>
            </div>
            <div className="card-title-section">
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="price">From ${props.price}</span> / Person</p>
            </div>
        </div>
    )
}
