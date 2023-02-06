import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waiters from "./pages/Waiters";
import Cooks from "./pages/Cooks";
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Waiters />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/cooks" element={<Cooks />} />
      </Routes>
    </Router>
  );
}

export default App;
