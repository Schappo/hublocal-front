import { ReactElement } from 'react'

type HeaderProps = {
  title: string
}

function Header(props: HeaderProps): ReactElement<HeaderProps> {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

export default Header
