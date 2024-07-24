import MultistepForm from "./MultistepForm"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';


function App() {
  return (
    <MantineProvider>
      <MultistepForm />
    </MantineProvider>
  )
}

export default App
