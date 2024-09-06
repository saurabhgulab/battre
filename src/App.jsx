import ButtonGradiant from "../src/assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Collaboration />
        <Pricing />
        {/* <Roadmap /> */}
        <Footer />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
