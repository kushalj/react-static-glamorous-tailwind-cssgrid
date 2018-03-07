import React from 'react'
import { withSiteData } from 'react-static'
//
import { css } from 'glamor'
import glamorous from 'glamorous'

import logoImg from '../elysian_logo2.png'

const LogoImage = glamorous.img({
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
    gridGap: 2,
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
  paddingBottom: '10px',
})

const SectionA = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
})

const SectionB = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  '@supports (display: grid)': {
    display: 'grid',
  },
})

const SectionC = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  '@supports (display: grid)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
})


export default withSiteData(() => (
  <PageGrid>

    <Header css={{ gridArea: 'header' }}>
      <div className={css(tw("inline-block  bg-white items-center shadow-md"))} >
        <LogoImage
          src={logoImg}
          alt=""
          className={css(tw("pt-3 pl-4"))}
        />
      </div>
      <p className={css(tw("pt-4"))}>Lorem ipsum dolor sit amet.</p>
    </Header>

    {/* <Box css={{ gridArea: 'sidebar' }}>Sidebar</Box> */}

    {/* Section A */}
    <SectionA css={{ margin: 0, gridArea: 'section-a' }}>
      <h1 className={css(tw("text-center"))}>
        What we do
      </h1>
        <LogoImage
          src="https://source.unsplash.com/o2TRWThve_I/600x400"
          alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam, voluptatibus ipsa architecto est ab temporibus consequuntur corporis saepe unde?</p>
    </SectionA>

    {/* Section B */}
    <SectionB css={{ margin: 0, gridArea: 'section-b' }}>
      <h1 style={{ textAlign: 'center' }}>How we work</h1>
      <SectionB_Image 
        src="https://source.unsplash.com/UCZF1sXcejo/600x400"
        alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia ratione veritatis quibusdam quasi vero repellendus! Veniam numquam quo officiis?</p>
    </SectionB>

    {/* Section C */}
    <SectionC css={{ margin: 0, gridArea: 'section-c' }}>
      <h1 style={{ textAlign: 'center' }}>What we make</h1>
      <SectionC_Image
        src="https://source.unsplash.com/9SoCnyQmkzI/600x400"
        alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio unde laudantium tempora repellat officiis tenetur eveniet quis dignissimos. Quisquam?</p>
    </SectionC>

  </PageGrid>
))
