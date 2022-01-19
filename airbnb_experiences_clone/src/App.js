import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import {contacts} from './constants/constants.js';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Card 
        image='../images/katie.png'
        rating="5.0"
        num_reviews={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="$125"
      />
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
