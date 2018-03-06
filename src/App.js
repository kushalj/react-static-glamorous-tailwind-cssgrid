import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Nav from './containers/Nav'
// import NavStyled from './containers/NavStyled'


css.global('html, body', tw('font-sans font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-demo-color font-bold'))

const NavStyled = glamorous.nav(tw('w-full bg-black opacity-75'))
const LinkStyled = glamorous(Link)(tw('text-white p-4 inline-block'))
const Content = glamorous.div(tw('p-0'))

const Grid = glamorous.div({
  margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 5,
    gridTemplateAreas: `
      "nav"
      "content"
      "footer"
    `,
  },
});

const Box = glamorous.div({
  backgroundColor: '#fff',
  color: '#fff',
  borderRadius: 0,
  padding: 10,
  fontSize: '150%',
});

const ContentBox = glamorous.div({
  backgroundColor: '#fff',
  color: '#999',
  borderRadius: 0,
  padding: 0,
  fontSize: '150%',
});


const Footer = glamorous(Box)(tw('bg-black h-32'))

const App = () => (
  <Router>
      <Grid css={{ marginBottom: 0, marginTop: 0 }}>
      <Nav css={{ gridArea: 'nav' }}/>
      {/* <NavStyled css={{ gridArea: 'nav' }}>

        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/about">About</LinkStyled>
        <LinkStyled to="/blog">Blog</LinkStyled>
      </NavStyled> */}

        <ContentBox css={{ gridArea: 'content'}}>
          <Content>
            <Routes />
          </Content>
        </ContentBox>

        <Footer css={{ gridArea: 'footer' }}>Footer</Footer>
      </Grid>
  </Router>
)

export default hot(module)(App)
