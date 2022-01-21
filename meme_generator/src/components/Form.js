import React from "react"
import { FaImage } from "react-icons/fa"

export default function Form() {
    return (
        <form className="meme-form">
            <div className="input-text">
                <input type="text" className="top-text" placeholder="Enter top text..."/>
                <input type="text" className="bottom-text" placeholder="Enter bottom text..."/>
            </div>
            <button className="get-meme-button">Get a new meme image <FaImage /></button>
        </form>
    )
}