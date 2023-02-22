import { ReactElement } from 'react'

type SignInProps = {
  title: string
}

function SignIn(props: SignInProps): ReactElement<SignInProps> {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

export default SignIn
