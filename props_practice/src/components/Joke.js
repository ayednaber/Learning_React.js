import React from "react"

export default function Joke(props) {
    const [isShown, updateIsShown] = React.useState(false)

    function changeIsShown() {
        updateIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <div className="joke-section">
            <h3>{props.setup}</h3>
            <p>{isShown && props.punchline}</p>
            <button onClick={changeIsShown} className="show-hide">Show/Hide Punchline</button>
            <hr />
        </div>
    )
}