import { Suspense } from 'react'

import ForgotPasswordPage from './container'

export default function Page() {
  return (
    <Suspense>
      <ForgotPasswordPage />
    </Suspense>
  )
}
