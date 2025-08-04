import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Modes from '../components/Modes.jsx';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <Modes />
      </main>
      <Footer />
    </div>
  );
};

export default Home;