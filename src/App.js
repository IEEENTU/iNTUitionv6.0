import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/navbar.js";
import Home from "./components/home.js";
import FAQ from "./components/fAQ.js";
import Schedule from "./components/schedule.js";
import Workshops from "./components/workshops.js";
import Prizes from "./components/prizes.js";
import Sponsors from "./components/sponsors.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className="App">
      <Particles id="particle-canvas" params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        }
	    }
	}}/>
      <div>
        
      <NavBar />
      <Home style = {{height:"100vh"}}/>
      
        <FAQ/>
      
      <Schedule />
      <Workshops />
      <Prizes />
      <Sponsors />
      <Contact/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
