import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DrawContainer from "./DrawContainer";

const App = () => {
  const date = "29/03/2024";

  return (
    <Router>
      <Routes>
        <Route
          path="/weekly"
          element={<DrawContainer date={date} originalType="weekly" />}
        />
        <Route
          path="/super"
          element={<DrawContainer date={date} originalType="super" />}
        />
        <Route
          path="/"
          element={<DrawContainer date={date} originalType="daily" />}
        />
        <Route
          path="*"
          element={<DrawContainer date={date} originalType="daily" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
