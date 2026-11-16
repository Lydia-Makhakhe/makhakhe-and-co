
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';
import Contact from './components/contact/Contact';

import AnalyticsTracker from './AnalyticsTracker';
import AnalyticsConsent from './AnalyticsConsent';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        {/* Analytics */}
        <AnalyticsTracker />
        <AnalyticsConsent />

        {/* Shared navigation */}
        <Navbar />

        {/* Website pages */}
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Services />
              </main>
            }
          />

          <Route
            path="/about"
            element={
              <About />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        {/* Shared footer */}
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
