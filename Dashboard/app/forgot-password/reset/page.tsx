import { Suspense } from 'react'

import ForgotPasswordPage from './wrapper'

export default function Page() {
  return (
    <Suspense>
      <ForgotPasswordPage />
    </Suspense>
  )
}
