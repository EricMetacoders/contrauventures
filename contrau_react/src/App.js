import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTop } from "antd";
import { BsArrowUpShort } from "react-icons/bs";
import Home from "./Pages/Home/Home";
import DetailFounder from "./Pages/InterviewPage/component/DetailFounder/DetailFounder";
import InterviewPage from "./Pages/InterviewPage/InterviewPage";
function App() {
  return (
    <BrowserRouter>
      <BackTop className="animate-bounce">
        <div className="left-[-34px] lg:left-0 bg-black border text-white hover:text-hotpink transition-all hover:shadow-xl px-2 py-2 lg:px-3 lg:py-3 rounded-full flex items-center justify-center absolute -top-20">
          <BsArrowUpShort size={40} />
        </div>
      </BackTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/story" element={<InterviewPage />} />
        <Route
          exact
          path="/detailfounder/:founderid"
          element={<DetailFounder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
