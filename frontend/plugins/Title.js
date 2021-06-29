import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('p', config)`

  ${props => {
    switch (props.typed) {
      case 'footer':
        return css`
          font-family: Light;
          font-size: 16px;
          letter-spacing: 0.57px;
        `
      case 'scroll':
        return css`
          font-family: Bold;
          font-size: 12px;
          color: #000000;
          letter-spacing: 1px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            font-size: 8px;
          }
        `
      case 'regular-16':
        return css`
          font-family: Regular;
          font-size: 16px;
          letter-spacing: 0.5px;
          @media screen and (max-width: 767px) {
            font-size: 14px;
          }
        `
      case 'regular':
        return css`
          font-family: Regular;
          font-size: 24px;
          line-height: 34px;
          color: #FFFFFF;
          letter-spacing: 1px;
        `
      case 'normal':
        return css`
          font-family: Light;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          line-height: 29px;
          @media screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 24px;
          }
        `
      case 'semibold':
        return css`
          font-family: SemiBold;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          line-height: 29px;
          @media screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 24px;
          }
        `
      case 'min-14':
        return css`
          font-family: Light;
          font-size: 14px;
          font-weight: 600;
          color: rgba(0,0,0,0.70);
          letter-spacing: 0.57px;
        `
    }
  }}
`
