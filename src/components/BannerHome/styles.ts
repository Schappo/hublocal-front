import styled from 'styled-components'

export const Container = styled.div<{ bgColor?: string }>`
  height: 100vh;
  width: 50%;
  background: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const BannerTop = styled.img`
  position: absolute;
  width: 50%;
  height: 70%;
  left: 0;
  top: 76px;
`
export const BannerBottom = styled.div`
  position: absolute;
  width: 50%;
  height: 30%;
  left: 1px;
  bottom: 0;
  background: #00CC99;
  box-sizing: border-box;

  padding: 0 300px;

  display: flex;
  flex-direction: column;
  fl space-between;
  align-items: center;
  justify-content: center;

  text-align: center;
`

export const BannerBottomH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;

  color: #FFFFFF;
  margin: 20px 0;
`

export const BannerBottomH6 = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 20px 0;
  text-align: center;
  color: #FFFFFF;
`