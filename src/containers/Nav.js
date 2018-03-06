import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { Router, Link } from 'react-static'
import { Routes } from 'react-static-routes'
//

const NavStyled = glamorous.nav()
const LinkStyled = glamorous(Link)(tw('text-white p-4 inline-block'))

export default () => (
    // <NavStyled css={tw("items-center justify-between flex-wrap bg-teal p-6")}>
    <NavStyled css={tw("w-full bg-demo-color")}>
        {/* <div css={tw("flex items-center flex-no-shrink text-white mr-6")}> */}
        <div css={tw("")}>
            {/* <svg css={tw("fill-current h-8 w-8 mr-2")} width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
            <span css={tw("font-semibold text-xl tracking-tight")}>Menu-Title</span>
        </div>
        {/* <div css={tw("block lg:hidden")}> */}
        <div css={tw("")}>
            <button css={tw("flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white")}>
                <svg css={tw("fill-current h-3 w-3")} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        {/* <div css={tw("w-full block flex-grow lg:flex lg:items-center lg:w-auto")}> */}
        <div css={tw("")}>
            {/* <div css={tw("text-sm lg:flex-grow")}> */}
            <div css={tw("")}>
                <LinkStyled to="/" css={tw("block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4")}>
                    Home
                </LinkStyled>
                <LinkStyled to="/blog" css={tw("block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4")}>
                    Blog
                </LinkStyled>
                <LinkStyled to="/about" css={tw("block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white")}>
                    About
                </LinkStyled>
            </div>
        </div>
    </NavStyled>
)
