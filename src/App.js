import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar';
import Video from '../src/components/video/video';
import Card from './components/card/card';
import Card2 from './components/card/card2';
import Aside from './components/Aside/aside';
import Hero from './components/Hero/hero';
import Hero2 from './components/Hero/hero2';
import Hero3 from './components/Hero/hero3';
import Card3 from './components/card/card3';
import Team from './components/Team/team';
import Awesomes from './components/timeline2/timeline';
import TimeLine from './components/Timeline/timeline';
import Footer from './components/Footer/footer';
import Features from './components/Features/features';
import About from './components/About/about';
import Documental from './components/Documental/documental';
import Colaborators from './components/Colaborators/colaborators';
import Institutions from './components/Institutions/institutions';
import Contact from './components/Contact/contact';
import { Swiper, SwiperSlide } from 'swiper/react';
import Gallery from './components/Gallery/gallery';
// import Swiper and modules styles
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

function App() {
  
  return (
    <div className="App bg-black scroll-smoth">
      <Navbar />
    
         <Swiper
      effect='cube'
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Hero /></SwiperSlide>
      <SwiperSlide><Hero2 /></SwiperSlide>
      <SwiperSlide><Hero3 /></SwiperSlide>



   
      ...
    </Swiper>
       
        <About />
        <Features />
        <TimeLine />
        <Documental />

        <Gallery />

        <Team />
        <Colaborators />
        <Institutions />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
