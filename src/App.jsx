import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Content from './components/Content'

const Button = ({ onClick, href, children }) => {
  const style = {
    backgroundColor: 'skyblue',
    border: 'none',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    lineHeight: 1,
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} style={style}>
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    )
  }
}

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return <button onClick={handleClick}>{count}回押しました</button>
}

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

  const href = 'https://ja.react.dev/'

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [isAgreed, setIsAgreed] = useState(false)

  const handleAgreedChange = (e) => {
    setIsAgreed(e.target.checked)
  }

  const handleSubmit = (e) => {
    // フォームのデフォルト動作であるページリロードを防ぐ
    e.preventDefault()
    alert('利用規約に同意してフォームを送信しました！')
  }

  const [count1, setCount1] = useState(0)

  const handleClick1 = () => {
    setCount1(count1 + 1)
  }

  return (
    <>
      <Counter></Counter>
      <button type="button" onClick={handleClick}>
        クリック
      </button>
      <Button onClick={handleClick}>ボタン</Button>
      <Button href={href}>リンク</Button>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <p>入力された値: {value}</p>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreedChange}
          />
          利用規約に同意する
        </label>
        <br />
        <button type="submit" disabled={!isAgreed}>
          送信
        </button>
      </form>

      <button onClick={handleClick1}>{count1}回押しました</button>

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
