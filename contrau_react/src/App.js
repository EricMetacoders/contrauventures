import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DetailFounder from './Pages/InterviewPage/component/DetailFounder/DetailFounder';
import InterviewPage from './Pages/InterviewPage/InterviewPage';
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/story" element={<InterviewPage />} />
        <Route  path="/detailfounder/:founderId" element={<DetailFounder />} />
        <Route path="*"  element={<NotFound />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;


