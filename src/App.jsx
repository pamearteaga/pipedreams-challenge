import { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waiters from "./pages/Waiters";
import Cooks from "./pages/Cooks";
import Navbar from "./components/Navbar/Navbar.jsx"
import Button from "./components/Button/Button";
import { useDispatch } from "react-redux";
import { getWaiters, getCooks } from "./redux/ducks";

function App() {
  const dispatch = useDispatch()
  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const [day, setDay] = useState(0)
  const handleNext = () => day < 4 && setDay(day + 1); 
  const handlePrev = () => day > 0 && setDay(day - 1);

  useEffect(() => {
    dispatch(getWaiters())
    dispatch(getCooks())
  })

  return (
      <Router>
        <Navbar role={"Waiters"}/>
        <div className="content">
          <h1 className="content_title">{weekDays[day]}</h1>
          <div className="content_buttons">
            <Button
              type={"button"}
              text={"← Prev"}
              buttonAction={() => handlePrev()}
              disabled={day === 0 ? true : false}
            />
            <Button
              type={"button"}
              text={"Next →"}
              buttonAction={() => handleNext()}
              disabled={day === 4 ? true : false}
            />
          </div>
          <Routes>
            <Route path="/" element={<Waiters day={weekDays[day]} />} />
            <Route path="/waiters" element={<Waiters day={weekDays[day]} />} />
            <Route path="/cooks" element={<Cooks day={weekDays[day]} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
