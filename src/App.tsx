import Hero from "./components/Hero/Hero";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import AboutUs from "./components/AboutUs/AboutUs";
export const MainContainer=".main-container"
function App() {
  return  <SmoothScrollProvider>
      <div className="main-container overflow-hidden"><Hero/>
      <AboutUs/>
      <div className="h-dvh w-screen ">help</div>
  </div>
    </SmoothScrollProvider>;
}

export default App;
