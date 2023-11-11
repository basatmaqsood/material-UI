import { Box, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import ModalWindow from "./components/Modal";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Box>
        <ModalWindow />
      </Box>
    </ThemeProvider>
  );
}

export default App;
