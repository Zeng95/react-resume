import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Shared/Device'

const GridContainer = styled.div.attrs({
  className: 'grid h-screen'
})`
  grid: 100px auto 100px / 1fr 300px 700px 1fr;

  @media ${device.laptop} {
    grid: 100px auto 100px / 1fr 200px 400px 1fr;
  }

  @media ${device.tablet} {
    grid: 1fr 1fr 1fr 1fr / 1fr;
  }
`
const Header = styled.header`
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row: 1;

  background-color: lightblue;
`
const Aside = styled.aside`
  grid-column: 2;
  grid-row: 2;

  background-color: lightgreen;

  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 2;
  }
`
const Main = styled.main`
  grid-column: 3;
  grid-row: 2;

  background-color: lightsalmon;

  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 3;
  }
`
const Footer = styled.footer`
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row: 3;

  background-color: lightseagreen;

  @media ${device.tablet} {
    grid-row: 4;
  }
`

const App: React.FC = () => {
  return (
    <GridContainer>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </GridContainer>
  )
}

export default App
