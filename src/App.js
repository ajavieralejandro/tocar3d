import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar';
import Video from '../src/components/video/video';
import Card from './components/card/card';
import Card2 from './components/card/card2';
import Aside from './components/Aside/aside';
import Hero from './components/Hero/hero';
import Card3 from './components/card/card3';
import Team from './components/Team/team';
import TimeLine from './components/Timeline/timeline';
import Footer from './components/Footer/footer';
import { Timeline } from '@mui/lab';
import Features from './components/Features/features';
import About from './components/About/about';
import Documental from './components/Documental/documental';
import Colaborators from './components/Colaborators/colaborators';
import Institutions from './components/Institutions/institutions';
function App() {
  
  return (
    <div className="App bg-black scroll-smoth">
      <Navbar />
        <Hero />
        <About />
        <Features />
        <TimeLine />
        <Documental />
        <Team />
        <Colaborators />
        <Institutions />

        <Footer />
    </div>
  );
}

export default App;
