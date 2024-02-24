import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from "react";

export default function SingIn() {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields')
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl justify-between mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Zoomish
            </span>
            Blog
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                id='email'
                placeholder='test@gmail.com'
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
                required
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {loading
                ? (<>
                  <Spinner size="sm" light={true} />
                  <span className="pl-3">Loading...</span>
                </>)
                : 'Sign Up'}
            </Button>
          </form>
          <div>
            <p className="text-gray-500 text-sm mt-5">
              Already have an account? <Link to='/signin' className="text-blue-500">Sign In</Link>
            </p>
          </div>
          {
            errorMessage && (
              <Alert classname="mt-5" color={'failure'}>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div >
    </div >
  )
}
