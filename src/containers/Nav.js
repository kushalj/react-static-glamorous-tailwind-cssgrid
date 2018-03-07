import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { Router, Link } from 'react-static'
import { Routes } from 'react-static-routes'
//

import logoImg from '../elysian_logo2.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

const NavStyled = glamorous.nav({
    position: 'relative',
    zIndex: 10,
    width: '100%',
  '@supports (display: grid)': {
      gridTemplateColumns: '1fr',
      gridGap: 1,
  },
})

const NavButton = glamorous.button()

const LinkStyled = glamorous(Link)(tw('block mt-0 items-center text-grey-lightest hover:text-white p-4 md:inline-block mr-4'))

export default () => (
    <NavStyled className={css(tw("flex items-center justify-between flex-wrap p-0 bg-grey-darkest"))}>
        {/* <div className={css(tw("block md:hidden"))}>
            <NavButton className={(tw("flex font-bold items-center px-4 py-2 rounded-l text-grey-light bg-transparent border-grey-light hover:text-white hover:border-white"))}>
                <svg className={css(tw("fill-current h-3 w-3"))} width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </NavButton>
        </div> */}

        <div className={css(tw("w-full block flex-grow md:flex md:items-center md:w-auto"))}>
            <div className={css(tw("text-sm md:flex-grow text-grey text-center"))}>
                <LinkStyled to="/">
                    Home
                </LinkStyled>
                <LinkStyled to="/blog">
                    Blog
                </LinkStyled>
                <LinkStyled to="/about">
                    About
                </LinkStyled>
            </div>
        </div>
    </NavStyled>
)
// className={css(tw("block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-white mr-4")}