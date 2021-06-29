import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('h2', config)`

  ${props => {
    switch (props.typed) {
      case 'index':
        return css`
          font-family: Regular;
          font-size: 32px;
          letter-spacing: 1px;
          line-height: 44px;
          @media screen and (max-width: 767px) {
            font-size: 24px;
            line-height: 28px;
          }
        `
      case 'main':
        return css`
          font-family: SemiBold;
          font-size: 24px;
          color: #000000;
          letter-spacing: 1px;
          @media screen and (max-width: 767px) {
            font-size: 14px;
          }
        `
      case 'big':
        return css`
          font-family: Bold;
          font-size: 80px;
          letter-spacing: 1px;
          @media screen and (max-width: 767px) {
            font-size: 24px;
          }
        `
      case 'classic':
        return css`
          font-family: Light;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          line-height: 29px;
          font-weight: 100;
          @media screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 24px;
          }
        `
    }
  }}
`
