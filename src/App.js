import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DailyPrize from "./DailyPrize";
import SuperPrize from "./SuperPrize";
import WeeklyPrize from "./WeeklyPrize";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/weekly" element={<WeeklyPrize />} />
        <Route path="/super" element={<SuperPrize />} />
        <Route path="/" element={<DailyPrize />} />
        <Route path="*" element={<DailyPrize />} />
      </Routes>
    </Router>
  );
};

export default App;
