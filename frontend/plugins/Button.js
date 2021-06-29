import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('button', config)`

  ${props => {
    switch (props.typed) {
      case 'footer':
        return css`
          font-family: Light;
          font-size: 16px;
          color: #000000;
          letter-spacing: 0.57px;
          padding: 0;
          padding-bottom: 5px;
          border: none;
          outline: none;
          background: none;
          border-bottom: 2px solid black;
          opacity: .3;
        `
    }
  }}
`
