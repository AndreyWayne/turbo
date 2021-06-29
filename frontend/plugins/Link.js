import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('a', config)`

  ${props => {
    switch (props.typed) {
      case 'footer':
        return css`
          font-family: Light;
          font-size: 16px;
          letter-spacing: 0.57px;
        `
      case 'wayne':
        return css`
          font-family: SemiBold;
          font-size: 15px;
          color: rgba(0,0,0,0.70);
          letter-spacing: 0.57px;
          font-weight: 900;
        `
    }
  }}
`
