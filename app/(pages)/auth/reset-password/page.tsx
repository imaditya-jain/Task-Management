import { AuthLayout, ResetPasswordForm } from '@/app/components'
import React, { Suspense } from 'react'

const ResetPasswordContent = () => {
  return (
    <AuthLayout title='Create a New Password' paragraph='Choose a strong password to secure your account.'>
      <ResetPasswordForm />
    </AuthLayout>
  )
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  )
}