import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import DrawContainer from "./DrawContainer";
import { Box } from "@mui/material";

const App = () => {
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
            element={<DrawContainer originalType="weekly" />}
          />
          <Route
            path="/super"
            element={<DrawContainer originalType="super" />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<DrawContainer originalType="daily" />} />
          <Route path="*" element={<DrawContainer originalType="daily" />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
