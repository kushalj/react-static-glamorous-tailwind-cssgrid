import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Nav from './containers/Nav'


css.global('html, body', tw('font-sans font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-grey-color'))
// css.global('@font-face', { 
//   fontFamily: 'sans-serif, "Open Sans Condensed"', 
//   src: "local('Open Sans Condensed'), local('OpenSansCondensed'), url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300')",
//   fontStyle: 'normal',
//   fontWeight: 300, 
//   src: "url(' ../fonts/open-sans-condensed-v12-latin-300.eot')", /* IE9 Compat Modes */
//   src: "local('Open Sans Condensed Light'), local('OpenSansCondensed-Light')",
//   src: "url('../fonts/open-sans-condensed-v12-latin-300.eot?#iefix') format('embedded-opentype')", /* IE6-IE8 */
//   src: "url('../fonts/open-sans-condensed-v12-latin-300.woff2') format('woff2')", /* Super Modern Browsers */
//   src: "url('../fonts/open-sans-condensed-v12-latin-300.woff') format('woff')", /* Modern Browsers */
//   src: "url('../fonts/open-sans-condensed-v12-latin-300.ttf') format('truetype')", /* Safari, Android, iOS */
//   src: "url('../fonts/open-sans-condensed-v12-latin-300.svg#OpenSansCondensed') format('svg')", /* Legacy iOS */
// })

const NavStyled = glamorous.nav()
const LinkStyled = glamorous(Link)(tw('text-white p-4 inline-block'))
const Content = glamorous.div(tw('p-0'))

const Grid = glamorous.div({
  // margin: '10px',
  // margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',

  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 1,
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


const Footer = glamorous(Box)(tw('bg-grey-darkest h-32'))


const App = () => (
  <Router>
      <Grid css={{ marginBottom: 0, marginTop: 0 }}>

      <Nav css={{ gridArea: 'nav' }}/>

      <ContentBox css={{ gridArea: 'content' }}>
        <Content>
          <Routes />
        </Content>
      </ContentBox>

        <Footer css={{ gridArea: 'footer' }}>Footer</Footer>
      </Grid>
  </Router>
)

export default hot(module)(App)
