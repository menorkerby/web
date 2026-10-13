import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Capabilities } from './sections/Capabilities';
import { Services } from './sections/Services';
import { Work } from './sections/Work';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

const App: React.FC = () => {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Header />

      <main id="home">
        <Hero />
        <Capabilities />
        <Services />
        <Work />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
