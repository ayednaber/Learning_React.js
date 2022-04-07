import React from "react";

export default function University(props) {
    const URL = "https://countryflagsapi.com/png/" + props.code

    return (
        <div className="university">
            <div className="name-and-photo">
                <img src={URL} className="flag"></img>
                <h2 className="university-name">{props.name}</h2>
            </div>
            <h4 className="university-country"><span className="country">Country: </span>{props.country}</h4>
            <a href={props.website} className="university-link">Visit Website</a>
            <hr className="hr" />
        </div>
    )
}