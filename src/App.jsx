
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';

import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeLanguageProvider>
        <>
          <Navbar />

          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <Services />
                </main>
              }
            />

            {/* About page */}
            <Route
              path="/about"
              element={
                <main>
                  <About />
                </main>
              }
            />

            {/* Redirect unknown routes to homepage */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>

          <Footer />
        </>
      </ThemeLanguageProvider>
    </BrowserRouter>
  );
}

export default App;
