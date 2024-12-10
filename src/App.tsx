import { useEffect, useState } from 'react'

interface MessageProps {
  count: number;
}

function App() {
  const [advice, setAdvice] = useState()
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch(import.meta.env.VITE_API_URL_ADVICE)
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(() => { getAdvice() }, [])

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </>
  )
}

function Message(props: MessageProps) {
  return (
    <p>
      Anda telah mendapatkan advice sebanyak <strong>{props.count}</strong> kali
    </p>
  )
}

export default App
