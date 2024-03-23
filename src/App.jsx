import { MantineProvider } from "@mantine/core"
import Splash from "./pages/Splash"
import "@mantine/core/styles.css";

function App() {

  return (
    <MantineProvider>
      <Splash/>
    </MantineProvider>
  )
}

export default App
