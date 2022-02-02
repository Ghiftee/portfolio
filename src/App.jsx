import './App.scss';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/porfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
