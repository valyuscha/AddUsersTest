import styled from 'styled-components'
import {colors} from '../../../themes/colors'
import caretDown from '../../../assets/imgs/icons/caret-down.svg'
import uploadMini from '../../../assets/imgs/sign-out-option.png'

const {inputgrey, white, red, orange} = colors

export const FormWrapper = styled.div`
  margin: 160px 0 140px;
  
  @media screen and (max-width: 768px) {
    margin: 70px 0;
  }
`

export const FormName = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 20px;
  
  @media screen and (max-width: 445px) {
    font-size: 26px;
  }
`

export const FormText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 60px;
  
  @media screen and (max-width: 445px) {
    font-size: 16px;
    margin-bottom: 33px;
    line-height: 22px;
  }
`

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FormFieldWrapper = styled.div`
  width: 287px;
  height: 90px;
  position: relative;
  margin-bottom: 20px;
  
  @media screen and (max-width: 1020px) {
    width: 260px;   
  }
  
  @media screen and (max-width: 900px) {
    width: 240px;   
  }
  
  @media screen and (max-width: 850px) {
    width: 220px;   
  }
  
  @media screen and (max-width: 768px) {
    width: 287px;
    margin: 0 auto 15px;
  }
`

export const FormFieldName = styled.span`
  font-size: 12px;
  color: ${p => p.valid && p.touched ? red : inputgrey};
  position: absolute;
  left: 4px;
  bottom: 83px;
  background: ${white};
  padding: 0 4px;
`

export const FormField = styled.input`
  width: 90%;
  font-size: 16px;
  padding: 19px 14px;
  border: 1px solid ${p => p.valid && p.touched ? red : inputgrey};
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: ${inputgrey};
  }
`

export const ErrorMessage = styled.p`
  color: ${red};
  font-size: 14px;
  margin-top: 10px;
`

export const SelectWrapper = styled.div`
  height: 70px;
  background: url(${caretDown}) no-repeat 95% 45%;
  
  @media screen and (max-width: 1020px) {
    width: 400px;   
  }
  
  @media screen and (max-width: 900px) {
    width: 380px;   
  }
  
  @media screen and (max-width: 850px) {
    width: 340px;   
  }
  
  @media screen and (max-width: 768px) {
    width: 288px;
    margin: 0 auto;
  }
`

export const Select = styled.select`
  width: 450px;
  height: 58px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 18px 15px;
  border: 1px solid ${inputgrey};
  border-radius: 4px;
  outline: none;
  position: relative;
  background: transparent;
  appearance: none;
  
  &:after {
    color: ${white};
  }
  
  
  @media screen and (max-width: 1020px) {
    width: 400px;   
  }
  
  @media screen and (max-width: 900px) {
    width: 380px;   
  }
  
  @media screen and (max-width: 850px) {
    width: 340px;   
  }
  
  @media screen and (max-width: 768px) {
    width: 288px;
  }
`

export const Options = styled.option``

export const Upload = styled.div`
  height: 88px;
  
  @media screen and (max-width: 768px) {
    margin: 35px auto 0;
  }
`

export const UploadWrapper = styled.div`
  height: 58px;
  width: 450px;
  display: flex;
  align-items: center;
  position: relative;
  
  @media screen and (max-width: 1020px) {
    width: 400px;   
  }
  
  @media screen and (max-width: 900px) {
    width: 380px;   
  }
  
  @media screen and (max-width: 850px) {
    width: 340px;   
  }
  
  @media screen and (max-width: 768px) {
    width: 288px;
  }
`

export const UploadInputFile = styled.input`
  outline: none;
`

export const UploadInput = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  padding: 19px 135px 19px 18px;
  border: 1px solid ${inputgrey};
  border-radius: 4px;
  outline: none;
  position: absolute;
  width: 450px;
  background: ${white};
  
  @media screen and (max-width: 1020px) {
    width: 400px;   
  }
  
  @media screen and (max-width: 900px) {
    width: 380px;   
  }
  
  @media screen and (max-width: 850px) {
    width: 340px;   
  }
  
  @media screen and (max-width: 768px) {
    width: 288px;
    padding-right: 70px;
  }
`

export const UploadLabel = styled.label`
  color: ${orange};
  border: 2px solid ${orange};
  border-radius: 0 4px 4px 0;
  padding: 14px 26px;
  font-size: 20px;
  position: absolute;
  right: 0;
  top: 0;
  
  &:hover {
    cursor: pointer;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const UploadLabelMini = styled.label`
  border: 2px solid ${orange};
  border-radius: 0 4px 4px 0;
  padding: 13px 18px;
  position: absolute;
  right: 0;
  top: 0;
  
  &:hover {
    cursor: pointer;
  }
  
  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const UploadLabelMiniImg = styled.img.attrs(() => ({
  src: uploadMini
}))``