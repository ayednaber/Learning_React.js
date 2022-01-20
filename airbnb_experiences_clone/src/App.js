import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import {contacts} from './constants/constants.js';
import data from './data';


function App() {
  let cardElements = data.map(cardElement => {
    return (
    <Card
      key={cardElement.id}
      cardElement={cardElement}
    />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="cards-list">
        {cardElements}
      </section>

      <div className='contacts'>
      {contacts.map(({id, img, name, phone, email}) => (
      <Contact key={id}
        img={img}
        name={name}
        phone={phone}
        email={email}
        >
      </Contact>
      ))}
      </div>
    </div>
  );
}

export default App;
