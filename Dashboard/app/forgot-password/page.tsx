import { Suspense } from 'react'

import ForgotPasswordWrapper from './container'

export default function Page() {
  return (
    <Suspense>
      <ForgotPasswordWrapper />
    </Suspense>
  )
}
