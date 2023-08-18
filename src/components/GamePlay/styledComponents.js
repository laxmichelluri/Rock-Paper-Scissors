import styled from 'styled-components'

export const GamePlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #22315f;
  padding: 20px;
`
export const GameRulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 50px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  height: 90%;
  width: 100%;
  margin-top: auto;
`
