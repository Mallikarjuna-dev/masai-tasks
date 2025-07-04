import './App.css'
import CollegeFormData from './CollegeFormData'
import Counter from './Counter'
import FormData from './FormData'
import ThemeToggle from './ThemeToggle'
import ToggleMessage from './ToggleMessage'

function App() {

  return (
    <>
      {/* Task 1: theme toggler */}
      <ThemeToggle />

      <hr style={{ marginTop: "20px" }} />

      {/* Task 2: Counter app */}
      <Counter />

      <hr style={{ marginTop: "20px" }} />

      {/* Task 3: Toggle Message */}
      <ToggleMessage />

      <hr style={{ marginTop: "20px" }} />

      {/* Task 4: Form Data */}
      <FormData />

      <hr style={{ marginTop: "20px" }} />

      {/* Task s: Complex College Form Data */}
      <CollegeFormData />
    </>
  )
}

export default App
