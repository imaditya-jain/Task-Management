import { AuthLayout, ForgotPasswordForm } from '@/app/components'
import React from 'react'

const ForgotPassword = () => {
  return (
    <>
    <AuthLayout title='Forgot Your Password?' paragraph="No worries. Enter your email or username and we'll send you a link to reset your password.">
      <ForgotPasswordForm />
    </AuthLayout>
    </>
  )
}

export default ForgotPassword