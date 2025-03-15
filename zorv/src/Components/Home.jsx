import React, { useState, useRef } from "react";
import { Box, IconButton, Input, Typography, Slide, Divider } from "@mui/material";
import { Mic, Search, Send } from "@mui/icons-material";
import ResumePreview from "./ResumePreview";
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50); // Default 50%
  const isResizingRef = useRef(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendClick = () => {
    if (userInput.trim() !== "") {
      setShowResume(true);
    }
  };

  // Start Resizing
  const handleMouseDown = (e) => {
    e.preventDefault();
    isResizingRef.current = true;

    const handleMouseMove = (moveEvent) => {
      if (!isResizingRef.current) return;

      let newWidth = (moveEvent.clientX / window.innerWidth) * 100;

      // Ensure leftWidth is between 30% - 50%
      newWidth = Math.min(Math.max(newWidth, 30), 50);

      setLeftWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      {/* Left Side - Chat Interface */}
      <Box
        sx={{
          flex: `${leftWidth}%`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "flex 0.2s linear",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ position: "absolute", top: 16 }}>
          Zorvyn
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, mt: 6 }}>
          What can I help with?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #444",
            borderRadius: "999px",
            px: 2,
            py: 1,
            backgroundColor: "#222",
            width: "50%",
          }}
        >
          <AttachFileSharpIcon sx={{ color: "#bbb", mr: 1 }} />
          <Input
            sx={{ flex: 1, color: "white" }}
            disableUnderline
            placeholder="Ask anything"
            value={userInput}
            onChange={handleInputChange}
          />
          {userInput.length === 0 ? (
            <Mic sx={{ color: "#bbb" }} />
          ) : (
            <IconButton onClick={handleSendClick}>
              <ArrowCircleUpOutlinedIcon sx={{ color: "#bbb" }} />
            </IconButton>
          )}
        </Box>
        <Typography variant="caption" sx={{ color: "#777", mt: 2 }}>
          Zorvyn.ai can make mistakes. Check important info.
        </Typography>
      </Box>

      {/* Resizable White Divider */}
      {showResume && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "white",
            width: "4px",
            cursor: "ew-resize",
            "&:hover": { backgroundColor: "#ddd" },
          }}
          onMouseDown={handleMouseDown}
        />
      )}

      {/* Right Side - Resume Preview (Always min 50% width) */}
      <Slide in={showResume} timeout={500}>
        <Box
          sx={{
            flex: `${100 - leftWidth}%`,
            backgroundColor: "#111",
            display: showResume ? "block" : "none",
            minWidth: "50vw", // At least 50% of screen
          }}
        >
          <ResumePreview />
        </Box>
      </Slide>
    </Box>
  );
};

export default Home;
