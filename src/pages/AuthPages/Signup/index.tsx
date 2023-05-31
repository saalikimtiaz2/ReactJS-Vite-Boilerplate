import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SignupCredentials = {
  name: string
  email: string
  password: string
}

const Signup = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<SignupCredentials>({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-blue-500 to-purple-500'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>Create an Account</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={credentials.name}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  name: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={credentials.email}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  email: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  password: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <button
              type='submit'
              className='focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className='font-medium text-blue-500 hover:text-blue-700'>
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signup
