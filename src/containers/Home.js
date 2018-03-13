import React from 'react'
import { withSiteData } from 'react-static'
//
import { css } from 'glamor'
import glamorous from 'glamorous'

import logoImg from '../elysian_logo2.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

const SectionA_Image = glamorous.img({
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
  '@supports(display: grid)': {
    display: 'grid',
    gridTemplateAreas: `
      "header header header"
      "sections sections sections"
    `,
    justifyItems:'center',
  },
});


const Header = glamorous.div({
  backgroundColor: '#fff',
  background: 'url(https://source.unsplash.com/gVx84BQjcwA)',
  backgroundSize: 'cover',
  color: '#ddd',
  padding: '120px 0 10px 0',
  textAlign: 'center',
  fontSize: '110%',
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '15em',
  boxShadow: 'inset 0 0 200px rgba(0,0,0,0.9)',
  paddingBottom: '10px',
  marginBottom: '20px',
})

const Sections = glamorous.div({
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
})

const SectionA = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  marginBottom: '20px',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: '5px',
    gridTemplateColumns: '1fr',
  },
})

const SectionB = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  marginBottom: '20px',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: '5px',
  },
})

const SectionC = glamorous.div({
  backgroundColor: 'white',
  width: '100%',
  marginBottom: '20px',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: '5px',
  },
})

const SectionContent = glamorous.div({
  width: '100%',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: '25px',
    justifyItems: 'center',
    textAlign: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    alignItems: 'center',
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

    {/* <Box css={{ gridArea: 'sxidebar' }}>Sidebar</Box> */}

<Sections className={css(tw("mx-4"), {gridArea: 'sections'} )}>
    
    <SectionA css={{ gridArea: 'section-a' }}>
      <h3 className={css(tw("text-center"))}>
        Product Design
      </h3>
      <SectionContent className={css(tw(""))}>
        <SectionA_Image
          src="https://source.unsplash.com/o2TRWThve_I/600x400"
          alt=""
          className={css(tw("mx-4"))}
        />
        <p className={css(tw(""))}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam, voluptatibus ipsa architecto est ab temporibus consequuntur corporis saepe unde?</p>
      </SectionContent>
    </SectionA>


    {/* Section B */}
    <SectionB css={{ gridArea: 'section-b' }}>
      <h3 className={css(tw("text-center"))}>
        How we work
      </h3>

      <SectionContent className="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia ratione veritatis quibusdam quasi vero repellendus! Veniam numquam quo officiis?</p>
        <SectionB_Image
          src="https://source.unsplash.com/9SoCnyQmkzI/600x400"
          alt="" 
          className={css(tw("mx-4"))}
        />
      </SectionContent>
    </SectionB>


    {/* Section C */}
    <SectionC css={{ gridArea: 'section-c' }}>
      <h3 className={css(tw("text-center"))}>
        What we make
      </h3>

      <SectionContent className="">
        <SectionC_Image
          src="https://source.unsplash.com/UCZF1sXcejo/600x400"
          alt="" 
          className={css(tw("mx-4"))}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia ratione veritatis quibusdam quasi vero repellendus! Veniam numquam quo officiis?</p>
      </SectionContent>
    </SectionC>
    </Sections>


  </PageGrid>
))
