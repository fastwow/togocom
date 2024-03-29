import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DailyPrize from "./DailyPrize";
import SuperPrize from "./SuperPrize";
import WeeklyPrize from "./WeeklyPrize";
import { CellRow } from "./Draw/CellRows";

const App = () => {
  const onAnimateFinished = React.useCallback(() => {
    console.log("onAnimateFinished");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/weekly" element={<WeeklyPrize />} />
        <Route path="/super" element={<SuperPrize />} />
        <Route path="/" element={<DailyPrize />} />
        <Route path="*" element={<DailyPrize />} />
      </Routes>
    </Router>
    // <CellRow values={"189"} size={8} onAnimateFinished={onAnimateFinished} />
  );
};

export default App;
