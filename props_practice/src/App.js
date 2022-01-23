import React from 'react'
import Joke from './components/Joke'
import jokesData from './jokesData';

function App() {
    const jokeElements = jokesData.map(jokeElem => {
        return (
            <Joke 
                key={jokeElem.id}
                setup={jokeElem.setup}
                punchline={jokeElem.punchline}
            />
        )
    })
    return (
    <div className="jokes">
        {jokeElements}
    </div>
    )
}

export default App;