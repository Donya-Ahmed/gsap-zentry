import Hero from "./components/Hero/Hero";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
import NavBar from "./components/NavBar/NavBar";
import Story from "./components/Story/Story";
import PinnedSection from "./components/PinnedSection/PinnedSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LatestUpdatesSection from "./components/LatestUpdatesSection/LatestUpdatesSection";
import CardGallery from "./components/CardGallery/CardGallery";
export const MainContainer = ".main-container";
function App() {
  return (
    <SmoothScrollProvider>
      <NavBar />
      <div className="main-container overflow-hidden bg-blue-50">
        <Hero />
        <AboutUs />
        <Features />
        <Story/>
        <PinnedSection/>
        <CardGallery/>
        <LatestUpdatesSection/>
        <Contact/>
        <Footer/>
        {/* <div className="min-h-dvh w-screen bg-black flex items-center justify-center">
          hello world
        </div> */}
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
