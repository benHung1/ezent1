import Events from "./components/Events/Events";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <NavBar />
      <Info />
      <Features />
      <Section />
      <Events />
      <Footer />
    </>
  );
}

export default App;
