import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ScrollToSection from "./ScrollToSection";
import RequestForm from "./components/forms/RequestForm";
import ApplyNow from "./components/forms/ApplyNow";
import Reachout from "./components/forms/Reachout";

function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = ["/requestform", "/applynow","/reachout"];
  return (
    <>
      <ScrollToSection />
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<Home />} />
        <Route path="/science" element={<Home />} />
        <Route path="/who-its-for" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="/applynow" element={<ApplyNow />} />
        <Route path="/reachout" element={<Reachout/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;