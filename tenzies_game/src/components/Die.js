import React from "react";

export default function Die(props) {
    let heldClassName = ""
    props.isHeld ? heldClassName = "dice green" : heldClassName = "dice"
    return (
        <h3 
            className={heldClassName}
            onClick={props.onClick}    
        >{props.value}</h3>
    )
}