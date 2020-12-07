import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/images/avatar.png'
import { device } from '../components/Shared/Device'

const GridContainer = styled.div.attrs({
  className: 'grid h-screen bg-white'
})`
  grid: min-content min-content auto 100px / 1fr 300px 700px 1fr;

  @media ${device.tablet} {
    grid: min-content min-content 1fr 1fr 1fr / 1fr;
  }
`

const Header = styled.header.attrs({
  className: 'py-8 text-white text-center'
})`
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row: 1;

  background-color: #2b3033;
`
const UserInfo = styled.figure``
const Avatar = styled.img.attrs({
  className: 'mx-auto rounded-full'
})`
  width: 60px;
  height: 60px;
`
const Name = styled.figcaption.attrs({
  className: 'mt-2.5 font-bold'
})``

const JobTitle = styled.p.attrs({
  className: 'py-3 text-center'
})`
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row: 2;

  color: #2b3131;
  background-color: #f4f4f4;
`

const Aside = styled.aside`
  grid-column: 2;
  grid-row: 3;

  background-color: lightgreen;

  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 3;
  }
`

const Main = styled.main`
  grid-column: 3;
  grid-row: 3;

  background-color: lightsalmon;

  @media ${device.tablet} {
    grid-column: 1;
    grid-row: 4;
  }
`

const Footer = styled.footer`
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row: 4;

  background-color: lightseagreen;

  @media ${device.tablet} {
    grid-row: 5;
  }
`

const Block = styled.section``

const Layout: React.FC = () => {
  return (
    <GridContainer>
      <Header>
        <UserInfo>
          <Avatar src={avatar} alt="User Avatar" />
          <Name>曾涛 | Leo Zeng</Name>
        </UserInfo>
      </Header>

      <JobTitle>前端开发工程师 | Web Developer</JobTitle>

      <Aside>Aside</Aside>

      <Main>Main</Main>

      <Footer>Footer</Footer>
    </GridContainer>
  )
}

export { Layout }
