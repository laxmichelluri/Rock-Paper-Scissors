import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  height: 150p;
  width: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`
export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ResultButton = styled.button`
  height: 30px;
  width: 100px;
  padding: 10px;
  color: #223a5f;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-style: none;
  outline: none;
`
