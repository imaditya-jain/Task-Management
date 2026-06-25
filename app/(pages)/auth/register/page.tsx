import { AuthLayout } from '@/app/components'
import {RegistrationForm} from '@/app/components'
import React from 'react'

const Register = () => {
  return (
    <AuthLayout title='Create Account' paragraph='Sign up to start organizing and tracking your tasks.'>
     <RegistrationForm />
    </AuthLayout>
  )
}

export default Register