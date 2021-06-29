import styled, { css } from 'vue-styled-components'
import Vue from 'vue'
import style from 'vue-styled-components'

const config = {
  typed: String,
  styled: String
}

export default styled('div', config)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
  }


  ${props => {
    switch (props.typed) {
      case '990':
        return css`
          max-width: 990px;
        `
    }
  }}
`
