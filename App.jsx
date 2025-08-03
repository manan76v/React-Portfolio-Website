import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Testimonials />
      <Blog />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;