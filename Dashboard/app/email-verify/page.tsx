import { Suspense } from 'react'
import Wrapper from './container'

export default function Page() {
  return (
    <Suspense>
      <Wrapper />
    </Suspense>
  )
}
