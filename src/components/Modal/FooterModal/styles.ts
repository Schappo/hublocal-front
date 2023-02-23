import styled from 'styled-components'
import Button from '../../Button'

export const FooterModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 40px;
  position: absolute;
  height: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 3px solid #e4e4e4;
  border-radius: 0px 0px 10px 10px;
`

export const FooterButton = styled(Button)`
  && {
    min-width: 100px;
    min-height: 40px;
  }
`