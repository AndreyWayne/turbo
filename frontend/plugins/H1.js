import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('h1', config)`

  ${props => {
    switch (props.typed) {
      case 'main':
        return css`
          font-family: Light;
          font-size: 14px;
          color: #000000;
          letter-spacing: 4.2px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            letter-spacing: 3px;
          }
        `
      case 'service':
        return css`
          font-family: Bold;
          font-size: 42px;
          -webkit-text-stroke: 1px white;
          color: transparent!important;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 58px;
          @media screen and (max-width: 767px) {
            font-size: 24px;
            line-height: 32px;
          }
        `
      case 'about':
        return css`
          font-family: Bold;
          font-size: 72px;
          -webkit-text-stroke: 1px white;
          color: transparent!important;
          letter-spacing: 3px;
          line-height: 80px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            font-size: 32px;
            line-height: 45px;
          }
        `
      case 'page':
        return css`
          font-family: Bold;
          font-size: 72px;
          -webkit-text-stroke: 1px white;
          color: transparent!important;
          letter-spacing: 3px;
          line-height: 80px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            font-size: 32px;
            line-height: 45px;
          }
        `
    }
  }}
`
