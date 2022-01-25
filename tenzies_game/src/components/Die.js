import React from "react";

export default function Die(props) {
    let heldClassName = ""
    props.isHeld ? heldClassName = "dice green" : heldClassName = "dice"
    return (
        <h3 className={heldClassName}>{props.value}</h3>
    )
}