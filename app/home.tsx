import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about';

export default function Home() {
  return (
    <main className='transition-all duration-300'>
      <Navbar />
      <Hero />
      <About />
      {/* Add other sections here */}
    </main>
  );
} 