import React from 'react'
import { withSiteData } from 'react-static'
//
import { css } from 'glamor'
import glamorous from 'glamorous'

import logoImg from '../elysian_logo2.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

const HeaderImage = glamorous.img({
  maxWidth: '100%',
})

const SectionB_Image = glamorous.img({
  maxWidth: '100%',
})
const SectionC_Image = glamorous.img({
  maxWidth: '100%',
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
      "section-a section-a section-a"
      "section-b section-b section-b"
      "section-c section-c section-c"
    `,
    justifyItems:'center',
  },
});


const Header = glamorous.div({
  backgroundColor: '#fff',
  background: 'url(https://source.unsplash.com/gVx84BQjcwA)',
  backgroundSize: 'cover',
  color: '#ddd',
  padding: '50px 0 10px 0',
  textAlign: 'center',
  fontSize: '110%',
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '15em',
  boxShadow: 'inset 0 0 200px rgba(0,0,0,0.9)',
})

const SectionA = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
  },
})

const SectionB = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
  },
})

const SectionC = glamorous.div({
  backgroundColor: 'grey',
  '@supports (display: grid)': {
  },
})


export default withSiteData(() => (
  <PageGrid>

    <Header css={{ gridArea: 'header' }}>
      <h1 style={{ textAlign: 'center' }}>Company Name</h1>
      <HeaderImage
        src=""
        alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </Header>

    {/* <Box css={{ gridArea: 'sidebar' }}>Sidebar</Box> */}

    {/* Section A */}
    <SectionA css={{ margin: 2, gridArea: 'section-a' }}>
      <h1 style={{ textAlign: 'center' }}>Summary</h1>
      <LogoImage
        src="https://source.unsplash.com/l090uFWoPaI/600x400"
        alt="" />
    </SectionA>

    {/* Section B */}
    <SectionB css={{ margin: 2, gridArea: 'section-b' }}>
      <h1 style={{ textAlign: 'center' }}>Remote</h1>
      <SectionB_Image 
        src="https://source.unsplash.com/UCZF1sXcejo/600x400"
        alt="" />
    </SectionB>

    {/* Section C */}
    <SectionC css={{ margin: 2, gridArea: 'section-c' }}>
      <h1 style={{ textAlign: 'center' }}>Product</h1>
      <SectionC_Image
        src="https://source.unsplash.com/9SoCnyQmkzI/600x400"
        alt="" />
    </SectionC>

  </PageGrid>
))
