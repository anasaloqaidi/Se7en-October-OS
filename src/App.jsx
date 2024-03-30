import { MantineProvider } from "@mantine/core"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash"
import "@mantine/core/styles.css";
import Home from "./pages/Home";

function App() {

  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
