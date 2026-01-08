import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  const contents = [
    {
      id: 'jsx',
      title: 'JSX',
      description: 'JSXについて解説を行います。',
    },
    {
      id: 'component',
      title: 'コンポーネント',
      description: 'コンポーネントについて解説を行います。',
    },
    {
      id: 'event',
      title: 'イベント',
      description: 'イベントについて解説を行います。',
    },
  ]

  const handleClick = () => {
    alert('クリックされました')
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        クリック
      </button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Layout>
        {contents.map((content) => (
          <Content key={content.id} {...content} />
        ))}
      </Layout>
    </>
  )
}

export default App
