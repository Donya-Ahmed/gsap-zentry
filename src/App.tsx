import Hero from "./components/Hero/Hero";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return  <SmoothScrollProvider>
      <div className="main-container overflow-x-hidden"><Hero/>
      <AboutUs/>
  </div>
    </SmoothScrollProvider>;
}

export default App;
