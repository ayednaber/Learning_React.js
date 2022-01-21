import React from "react"
import { FaImage } from "react-icons/fa"
import memesData from "../memesData"

export default function Form() {
    const memes = memesData.data.memes
    let randomEntry = memes[Math.floor(Math.random()*memes.length)]
    const [memeImage, updateMemeImage] = React.useState(randomEntry.url)


    function getRandomImage() {
        randomEntry = memes[Math.floor(Math.random()*memes.length)]
        updateMemeImage(prevImage => randomEntry.url)
        // console.log(randomEntry.url)
    }

    
    return (
        <div className="meme-container">
            <div className="meme-form">
                <div className="input-text">
                    <input type="text" className="top-text" placeholder="Enter top text..."/>
                    <input type="text" className="bottom-text" placeholder="Enter bottom text..."/>
                </div>
                <button onClick={getRandomImage} className="get-meme-button">Get a new meme image <FaImage /></button>
            </div>
            <img src={memeImage} className="meme-image" />
        </div>
        
    )
}