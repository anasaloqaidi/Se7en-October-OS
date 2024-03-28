import { MantineProvider } from "@mantine/core"
import Splash from "./pages/Splash"
import "@mantine/core/styles.css";
import Home from "./pages/Home";

function App() {

  return (
    <MantineProvider defaultColorScheme="dark">
      <Home/>
    </MantineProvider>
  )
}

export default App
