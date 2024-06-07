import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from './stores/store'
import CountButton from './components/CountButton'

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
        <CountButton count={count} method={increase}/>
        <CountButton count={count} method={decrease}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
