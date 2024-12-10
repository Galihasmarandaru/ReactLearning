import { useEffect, useRef, useState } from 'react'

interface MessageProps {
  count: number;
}

function Advice() {
  const [advice, setAdvice] = useState<string>()
  const [count, setCount] = useState<number>(0)
  const hasFetchAdvice = useRef<boolean>(false)

  async function getAdvice() {
    const res = await fetch(import.meta.env.VITE_API_URL_ADVICE)
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(() => {
    if (!hasFetchAdvice.current) {
      getAdvice()
      hasFetchAdvice.current = true
    }
  }, [])

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

export default Advice
