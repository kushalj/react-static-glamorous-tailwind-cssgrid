import React from 'react'
import { withSiteData } from 'react-static'
//
import { css } from 'glamor'
import glamorous from 'glamorous'

import logoImg from '../logo.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

const SectionB_Image = glamorous.img({
  maxWidth: '100%',
})
const SectionC_Image = glamorous.img({
  maxWidth: '100%',
})


const Header = glamorous.div({
  backgroundColor: '#444',
  color: '#fff',
  borderRadius: 5,
  padding: 10,
  fontSize: '150%',
})

const PageGrid = glamorous.div({
  margin: 'auto',
  backgroundColor: '#fff',
  color: '#444',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 5,
    gridTemplateAreas: `
      "header header header"
      "content content content"
    `,
  },
});

const SectionA = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 5,
    // gridTemplateRows: ,
    // gridTemplateAreas: `
    //   "nav nav nav"
    //   "header header header"
    //   "content content content"
    //   "footer  footer  footer"
    // `,
  },
})

const SectionB = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 5,
  },
})

const SectionC = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 5,
  },
})


export default withSiteData(() => (
  <div>

      <Header css={{ gridArea: 'header' }}>
        Header
      </Header>

        {/* <Box css={{ gridArea: 'sidebar' }}>Sidebar</Box> */}

        {/* Section A */}
        <SectionA css={ tw('mb-10px')}>
          <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
          <LogoImage src={logoImg} alt="" />
        </SectionA>

        {/* Section B */}
        <SectionB>
          <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
          <SectionB_Image src={logoImg} alt="" />
        </SectionB>

        {/* Section C */}
        <SectionC>
          <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
          <SectionC_Image src={logoImg} alt="" />
        </SectionC>
        
  </div>
))
