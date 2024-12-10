import { useState } from 'react'

function App() {
  const [advice, setAdvice] = useState()

  async function getAdvice() {
    const res = await fetch(import.meta.env.VITE_API_URL_ADVICE)
    const data = await res.json()
    setAdvice(data.slip.advice)
  }

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  )
}

export default App
