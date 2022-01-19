import React from 'react'
import Joke from './components/Joke'

function App() {
    return (
    <div className="jokes">
        <Joke 
            setup="I got my daughter a fridge for her birthday."
            punchline="I can't wait to see her face light up when she opens it."
        />
        <Joke 
            setup="How did the hacker escape the police?"
            punchline="He just ransomware!"
        />
        <Joke 
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."
        />
        <Joke 
            setup="Why do bees stay in the hive in the winter?"
            punchline="Swarm."
        />
    </div>
    )
}

export default App;