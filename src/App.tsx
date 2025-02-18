import './App.css'
import { BookingForm } from './components/BookingForm'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Välkommen till bokningssidan</h1>
    </header>
    <main>
      <BookingForm /> {/* Rendera bokningsformuläret */}
    </main>
  </div>
  )
}

export default App
