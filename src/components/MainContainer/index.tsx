import { ReactElement } from 'react'
import { Container } from './styles'

type MainContainerProps = {
  title: string
  children: ReactElement
}

function MainContainer({
  children,
}: MainContainerProps): ReactElement<MainContainerProps> {
  return <Container>{children}</Container>
}

export default MainContainer
