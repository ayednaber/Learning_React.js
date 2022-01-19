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
      image={cardElement.coverImg} 
      rating={cardElement.stats.rating}
      num_reviews={cardElement.stats.reviewCount}
      country={cardElement.location}
      title={cardElement.title}
      price={cardElement.price}
    />
    )
  })
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}

      {cardElements}

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
