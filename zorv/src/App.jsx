import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
