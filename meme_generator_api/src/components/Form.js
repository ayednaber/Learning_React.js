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

    React.useEffect(function () {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    function getRandomImage() {
        randomEntry = memes[Math.floor(Math.random()*memes.length)]
        updateMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                randomImage: randomEntry.url
            }
        })
    }

    // console.log(memeImage)

    function handleChange(event) {
        const {name, value} = event.target
        updateMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            [name]: value
        }))
    }

    
    return (
        <div className="meme-container">
            <div className="meme-form">
                <div className="input-text">
                    <input type="text" className="top-text" placeholder="Enter top text..."
                        onChange={handleChange}
                        name="topText"
                        value={memeImage.topText}
                    />
                    <input type="text" className="bottom-text" placeholder="Enter bottom text..."
                            onChange={handleChange}
                            name="bottomText"
                            value={memeImage.bottomText}/>
                </div>
                <button onClick={getRandomImage} className="get-meme-button">Get a new meme image <FaImage /></button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
        
    )
}