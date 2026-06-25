import { AuthLayout, LoginForm } from '@/app/components'
import React from 'react'

const Login = () => {
  return (
    <AuthLayout title='Welcome Back' paragraph='Sign in to your account to continue managing your tasks.'>
      <LoginForm />
    </AuthLayout>
  )
}

export default Login