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

  useEffect(() => {
    console.log('Component has mounted')
  }, [])

  return <div className="">Loading</div>
}
