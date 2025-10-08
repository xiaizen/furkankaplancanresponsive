import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Coaching from './components/Coaching';
import Gallery from './components/Gallery';
import Students from './components/Students';
import Sponsor from './components/Sponsor';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Coaching />
      <Gallery />
      <Students />
      <Sponsor />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
