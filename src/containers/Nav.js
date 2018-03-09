import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { Router, Link } from 'react-static'
import { Routes } from 'react-static-routes'
//
import ResponsiveMenu from 'react-responsive-navbar'

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

const NavButton = glamorous.button(tw("flex items-center px-4 py-2 bg-transparent border-grey hover:text-grey-light hover:border-grey-darkest"))

const LinkStyled = glamorous(Link)(tw('block mt-0 items-center text-grey-darkest hover:underline p-4 md:inline-block mr-4 text-sm md:flex-grow text-grey-dark text-center'))

export default () => (
    <NavStyled className={css(tw("items-center justify-between flex-wrap p-0 bg-white md:flex md:justify-end md:w-auto"))}>
        {/* <div className={css(tw("block md:hidden"))}>
            <NavButton className={(tw("flex font-bold items-center px-4 py-2 rounded-l text-grey-light bg-transparent border-grey-light hover:text-white hover:border-white"))}>
                <svg className={css(tw("fill-currew-full inline-block flex-grow md:flex md:items-center md:w-auto"))} width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </NavButton>
        </div> */}
        <ResponsiveMenu 
            menuOpenButton={
                <NavButton className={css(tw("flex font-bold items-center px-4 py-2 rounded-l text-grey bg-transparent border-grey-light hover:text-grey-dark border-none hover:border-white"))}>
                    <svg className={css(tw("fill-current h-3 w-3"))} width="2em" height="2em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </NavButton>
            }
            menuCloseButton={
                <NavButton className={(tw("flex font-bold items-center px-4 py-2 rounded-l text-grey bg-transparent border-grey-light hover:text-grey-dark border-none hover:border-white"))}>
                    <svg className={css(tw("fill-current h-3 w-3"))} width="2em" height="2em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </NavButton>
            }
            changeMenuOn="768px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
                // <div className={css(tw("w-full inline-block flex-grow md:flex md:items-center md:w-auto"))}>
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
                // </div>
            }
            className={css(tw("w-full"))} 
        />
    </NavStyled>
)
// className={css(tw("block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-white mr-4")}