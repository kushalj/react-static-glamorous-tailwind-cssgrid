import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Nav from './containers/Nav'
// import NavStyled from './containers/NavStyled'


css.global('html, body', tw('font-demo-serif font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-demo-color font-bold'))

const NavStyled = glamorous.nav(tw('w-full bg-black'))
const LinkStyled = glamorous(Link)(tw('text-white p-4 inline-block'))
const Content = glamorous.div(tw('p-4'))
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
      "nav nav nav"
      "content content content"
      "footer  footer  footer"
    `,
  },
});

const Box = glamorous.div({
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 5,
  padding: 10,
  fontSize: '150%',
});

const ContentBox = glamorous.div({
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 5,
  padding: 5,
  fontSize: '150%',
});


const Footer = glamorous(Box)(tw('bg-black h-32'))

const App = () => (
  <Router>
      <Grid css={{ marginBottom: 30, marginTop: 10 }}>

      <NavStyled css={{ gridArea: 'nav' }}>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/about">About</LinkStyled>
        <LinkStyled to="/blog">Blog</LinkStyled>
      </NavStyled>

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
