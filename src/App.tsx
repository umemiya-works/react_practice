import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from './stores/store'
import CountButton from './components/CountButton'
import { Link } from '@tanstack/react-router'

function App() {
  const { count, increase, decrease } = useStore(state => ({
    count: state.count,
    increase: state.increase,
    decrease: state.decrease
  }))

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>count: {count}</h2>
        <CountButton method={increase} title="increase"/>
        <CountButton method={decrease} title="decrease"/>
      </div>
      <div>
        <Link to="/about">
          About
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
