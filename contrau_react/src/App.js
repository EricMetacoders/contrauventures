import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Founders from "./Components/Founders/Founders";
import Group from "./Components/Group/Group";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import News from "./Components/News/News";
import Portfolio from "./Components/Portfolio/Portfolio";
import ValueAdd from "./Components/ValueAdd/ValueAdd";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Group />
      <Founders />
      <Portfolio />
      <ValueAdd />
      <Faq />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
