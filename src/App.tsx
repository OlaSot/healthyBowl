import React from 'react';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartPage from './components/CartPage';

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleBackToSite = () => {
    setShowCart(false);
  };

  if (showCart) {
    return (
      <CartProvider>
        <div className="min-h-screen">
          <Navigation onCartClick={handleCartClick} />
          <CartPage onBack={handleBackToSite} />
        </div>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navigation onCartClick={handleCartClick} />
        <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="menu">
            <Menu />
          </section>
          <Gallery />
          <Testimonials />
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;