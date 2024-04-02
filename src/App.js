import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import DrawContainer from "./DrawContainer";
import { Box } from "@mui/material";

const App = () => {
  const date = new Date().toLocaleDateString();

  return (
    <Box
      sx={{
        // full screen
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        backgroundImage: "url(/main_background.jpg)",
      }}
    >
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
          <Route path="/admin" element={<Admin />} />
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
    </Box>
  );
};

export default App;
