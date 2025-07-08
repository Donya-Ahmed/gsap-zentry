import Hero from "./components/Hero/Hero";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
export const MainContainer=".main-container"
function App() {
  return  <SmoothScrollProvider>
      <div className="main-container overflow-hidden"><Hero/>
      <AboutUs/>
      <Features/>
  </div>
    </SmoothScrollProvider>;
}

export default App;
