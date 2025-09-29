import './App.css'
import Routes from './Routers'
import Header from './pages/Header'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App