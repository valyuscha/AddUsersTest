import styled from 'styled-components'
import {colors} from '../../../themes/colors'

const {contextgrey} = colors

export const ShowUsersWrapper = styled.div`
  padding-top: 140px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`

export const ShowUsersName = styled.h2`
  font-size: 42px;
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
  }
`

export const ShowUsersText = styled.p`
  font-size: 18px;
  padding-top: 20px;
  
  @media screen and (max-width: 445px) {
    margin: 0 auto;
    font-size: 16px;
  }
`

export const ShowUsersItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media screen and (max-width: 667px) {
    justify-content: space-around;
  }
`

export const ShowUsersItemWrapper = styled.div`
  width: 285px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
   
  @media screen and (max-width: 950px) {
    width: 260px;
    flex-direction: column;
  }
  
  @media screen and (max-width: 667px) {
    margin-top: 30px;
  }
  
  @media screen and (max-width: 867px) {
    width: 200px;
  }
  
  @media screen and (max-width: 445px) {
    width: 260px;
  }
`

export const ShowUsersItemImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 950px) {
    margin: 0 auto;
  }
`

export const ShowUsersItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const ShowUsersItemDescription = styled.div`
  width: 200px;
  text-align: left;
  margin-top: 27px;
  
  @media screen and (max-width: 950px) {
    text-align: center;
    width: 260px;
  }
  
  @media screen and (max-width: 867px) {
    width: 200px;
  }
  
  @media screen and (max-width: 445px) {
    width: 260px;
  }
`

export const ShowUsersItemName = styled.h3`
  width: 100%;
  font-size: 22px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ShowUsersItemJob = styled.p`
  font-size: 14px;
  color: ${contextgrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ShowUsersItemEmail = styled.p`
  font-size: 14px;
  color: ${contextgrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ShowUsersItemPhone = styled.p`
  font-size: 14px;
  color: ${contextgrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`