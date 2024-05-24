import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './components/banner/Banner';
import { Emblems } from './components/emblems/Emblems';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Marks } from './components/marks/Marks';
import { Modal } from './components/modal/Modal';
import { Section } from './components/section/Section';
import { Testimonials } from './components/testimonial/Testimonials';

import data from './API/rms.json';
import { AboutUs } from './components/about/AboutUs';

function App() {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [roomsList, setRoomsList] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    const roomsData = data["accom"];

    if (roomsData) {
      setRoomsList(roomsData);
    }
  };

  const toSetCurrentRoom = (id) => {
    setCurrentRoom(id);
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <Section list={roomsList} setCurrentRoom={toSetCurrentRoom} />
      <Emblems />
      <Marks />
      <Testimonials />
      <AboutUs />
      <Footer />
      {currentRoom && <Modal currentRoom={currentRoom} setCurrentRoom={toSetCurrentRoom} />}
    </div>
  );
}

export default App;
