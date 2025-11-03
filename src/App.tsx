import { useState } from 'react';
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import About from './components/About';
import ForWho from './components/ForWho';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
  <Hero onCTAClick={() => setIsModalOpen(true)} />
  <WhoAmI />
  <About />
      <ForWho />
      <CTA onCTAClick={() => setIsModalOpen(true)} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
