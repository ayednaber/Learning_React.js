import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./data";

function App() {
  let locationElements = data.map(locationElem => {
    return (
    <Location 
      key={locationElem.id}
      locationElem={locationElem} // I reached here (TODO now: fix Location.js)
    />
    )
  })
  return (

    <div className="app">
    <Navbar />
    {locationElements}
   </div>
  )
}

export default App;
