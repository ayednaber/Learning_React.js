import React from "react"
import { FaImage } from "react-icons/fa"
import memesData from "../memesData"

export default function Form() {
    const memes = memesData.data.memes
    let randomEntry = memes[Math.floor(Math.random()*memes.length)]
    const [memeImage, updateMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemeImages: memesData
    })


    function getRandomImage() {
        randomEntry = memes[Math.floor(Math.random()*memes.length)]
        updateMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                randomImage: randomEntry.url
            }
        })
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
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </div>
        
    )
}