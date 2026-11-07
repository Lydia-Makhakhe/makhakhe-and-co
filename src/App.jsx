
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default App;
