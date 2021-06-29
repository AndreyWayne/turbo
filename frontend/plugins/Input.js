import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('input', config)`

  ${props => {
    switch (props.typed) {
      case 'footer':
        return css`
          font-family: Light;
          font-size: 16px;
          color: black;
          letter-spacing: 0.57px;
          border: none;
          outline: none;
          border-bottom: 1px solid rgba(0, 0, 0, 1);
          padding-bottom: 12px;
          transition: all .4s;
          width: 100%;
          &:focus {
            border-bottom: 1px solid rgba(0, 0, 0, 1);
          }
        `
    }
  }}
`
