import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import Services from './components/home/Services';

import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

import './App.css';

function App() {
  return (
    <ThemeLanguageProvider>
      <>
        <Navbar />

        <main>
          <Hero />
          <Services />
        </main>

        <Footer />
      </>
    </ThemeLanguageProvider>
  );
}

export default App;