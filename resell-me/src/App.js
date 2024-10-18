import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import "./index.scss";
import './components/GetStartedCards.js';
import Banner from "./components/Banner.js";
import About from "./components/About.js";
import GetStartedCards from "./components/GetStartedCards.js";
import OurFeatures from "./components/Ourfeatures.js";
import UseCases from "./components/UseCases.js";
import Testimonials from "./components/Testimonials.js";
import Faqs from "./components/Faqs.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
      <div className="sticky-top">
        <Banner/>
        <About/>
        <GetStartedCards/>
        <OurFeatures/>
        <UseCases/>
        < Testimonials/>
        < Faqs/>
        < Footer/>
      
        
      </div>
    </>
  );
}

export default App;