import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DetailFounder from './Pages/InterviewPage/component/DetailFounder/DetailFounder';
import InterviewPage from './Pages/InterviewPage/InterviewPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/story" element={<InterviewPage/>}/>
        <Route exact path="/detailfounder/:founderid" element={<DetailFounder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


