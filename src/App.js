import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import DrawContainer from "./DrawContainer";
import { Box } from "@mui/material";
import { formatDate } from "./format";

const App = () => {
  const date = formatDate(new Date());

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
            element={
              <DrawContainer
                date={date}
                originalType="weekly"
                todayDate={date}
              />
            }
          />
          <Route
            path="/super"
            element={
              <DrawContainer
                date={date}
                originalType="super"
                todayDate={date}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/"
            element={
              <DrawContainer
                date={date}
                originalType="daily"
                todayDate={date}
              />
            }
          />
          <Route
            path="*"
            element={
              <DrawContainer
                date={date}
                originalType="daily"
                todayDate={date}
              />
            }
          />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
