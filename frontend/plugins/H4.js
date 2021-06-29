import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('h4', config)`

  ${props => {
    switch (props.typed) {
      case 'sale':
        return css`
          font-family: SemiBold;
          font-size: 14px;
          letter-spacing: 0.44px;
          text-align: left;
          line-height: 17px;
        `
      case 'footer':
        return css`
          opacity: 0.49;
          font-family: SemiBold;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            font-size: 12px;
          }
        `
    }
  }}
`
