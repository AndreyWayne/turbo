import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('h3', config)`

  ${props => {
    switch (props.typed) {
      case 'index':
        return css`
          font-family: SemiBold;
          font-size: 14px;
          color: #000000;
          letter-spacing: 4.2px;
          line-height: 18px;
          text-transform: uppercase;
          @media screen and (max-width: 767px) {
            letter-spacing: 3px;
          }
        `
        case 'sale':
          return css`
            font-family: SemiBold;
            font-size: 16px;
            letter-spacing: 0.5px;
          `
    }
  }}
`
