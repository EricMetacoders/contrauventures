import logo from './logo.svg';
import './App.css';
import InterviewPage from './features/InterviewPage';
import {
  BrowserRouter as Router,
  Routes ,Route ,
} from "react-router-dom";
import DetailFounder from './features/component/DetailFounder/DetailFounder';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      
          <Route exact path="/" element={<InterviewPage/>}/>

          <Route exact path="/detailinterview" element={<DetailFounder/>}/>
    
        </Routes>
        </Router>
    </div>
  );
}

export default App;
