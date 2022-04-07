import React from 'react';
import './App.css';
import University from './components/University';
import { nanoid } from "nanoid";
import Navbar from './components/Navbar';

function App() {
  const [universities, setUniversities] = React.useState([])
  const [searchWord, setSearchWord] = React.useState("")

  const getFlag = async ()  => {
    if (searchWord !== "") {
      const response = await fetch(`http://universities.hipolabs.com/search?name=${searchWord}`)
      const respData = await response.json()
      console.log(respData)
      setUniversities(respData)
    }
  };

  React.useEffect(() => {
    getFlag();
  }, [searchWord])

  console.log(universities)

  function updateSearchWord() {
    console.log(document.getElementById('university-name').value)
    setSearchWord(document.getElementById('university-name').value)
  }

  let universityElements = universities.map(university => {
    return (
      <University
        key={nanoid()}
        name={university.name}
        country={university.country}
        code={university.alpha_two_code}
        website={university.web_pages[0]}
      />
    )
  })

  return (
    <div className='world-university-app'>
      <Navbar />
      <div className='search-div'>
        <input type='text' id='university-name' className='university-name' placeholder='Enter University Name..'></input>
        <button className='university-button' onClick={updateSearchWord}>Search</button>
      </div>
      {universityElements}
    </div>
  );
}

export default App;
