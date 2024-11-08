import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css"; 
import Navbar from './Components/NavBar/NavBar';
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import HumansPage from "./Pages/HumansPage/HumansPage"; 
import NoHumansPage from "./Pages/NoHumansPage/NoHumansPage"; 
import AboutPage from "./Pages/AboutPage/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="/humans" element={<HumansPage/>} />  
        <Route path="/non-humans" element={<NoHumansPage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
