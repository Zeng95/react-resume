// globalStyles.js
import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`py-10 px-20`}
    background: url('./bg.png') no-repeat center/cover;
  }
`

export default GlobalStyle
