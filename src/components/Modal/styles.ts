import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderModal = styled.div<{ color?: string }>`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.color || '#0385FD'};
  border-radius: 10px 10px 0px 0px;
`
export const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
`
export const ContentModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 80px;
`

export const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  transform: 'translate(-50%, -50%)',
  minWidth: '30%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}