import Faq from "./Components/Faq/Faq";
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
    </div>
  );
}

export default App;
