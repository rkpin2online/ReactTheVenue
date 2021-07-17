import "./App.css";
import { Element } from "react-scroll";
import Header from "./Components/header_footer/Header";
import Featured from "./Components/Featured";
import VenueNfo from "./Components/VenueNfo";
import Highlights from "./Components/Highlights";
import Pricing from "./Components/pricing";
import Location from "./Components/location";
import Footer from "./Components/header_footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", backgroundColor: "whitesmoke" }}
    >
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
