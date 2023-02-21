import { ReactElement, useState } from 'react'

type FormValues = {
  email: string
  password: string
}

type FormErrors = {
  email: string
  password: string
}

function LoginForm(): ReactElement {
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: '',
    password: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Validation logic
    if (formData.email === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }))
      return
    }
    if (formData.password === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }))
      return
    }
    // Submit login request
    console.log(formData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <span>{formErrors.password}</span>}
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
