import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar';
import Video from '../src/components/video/video';
import Card from './components/card/card';
import Card2 from './components/card/card2';
function App() {
  return (
    <div className="App bg-black scroll-smoth">

    <Navbar />
    <main className="relative">
    <Card/>
    <Video />

    </main>



    </div>
  );
}

export default App;
