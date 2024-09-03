import ButtonGradiant from "../src/assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
