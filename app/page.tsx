import Image from 'next/image'
import { useEffect } from 'react'

import { useMemo } from 'react'

export default function Home() {
  const expensiveCalculation = useMemo(() => {
    let result = 0
    for (let i = 0; i < 1000000000; i++) {
      result += i
    }
    return result
  }, [])

  const [count, setCount] = useState(0)

  return (
    <div className="">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )

  useEffect(() => {
    console.log('Component has mounted')
  }, [])

  return <div className="">Loading</div>
}
