import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { Router, Link } from 'react-static'
import { Routes } from 'react-static-routes'
//
import logoImg from '../elysian_logo2.png'
import envelopeSvg from '../../fonts/zondicons/envelope.svg'
import phoneSvg from '../../fonts/zondicons/phone.svg'
import networkSvg from '../../fonts/zondicons/network.svg'



const LogoImage = glamorous.img({
  maxWidth: '100%',
  height: '150px',
  marginBottom: '60px',
})

const SvgIcon = glamorous.img({
    width: '1.1em',
    filter: 'invert(0.5) sepia(1) saturate(2) hue-rotate(120deg)',
    paddingRight: '5px',
    marginBottom: '8px',
    height: "16px",
    width: "16px",
})

const  FooterSection = glamorous.div({
    // padding: 10,
    // height: '100px',
    '@supports (display: grid)': {
        display: 'grid',
        // justifyItems: 'center',
        // alignItems: 'start',
        // gridGap: 1,
    },
})

const FooterBox = glamorous.div({
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '@supports (display: grid)': {
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 3fr)',
        gridColumn: 'auto',
        justifyItems: 'center',
        gridGap: 1,
},
})

const LinkStyled = glamorous(Link)(tw('block text-white mt1 items-center hover:underline p-4 md:inline-block mr-4 text-sm md:flex-grow'))

export default () => (
    <FooterSection className={css(tw("container bg-grey-darkest p-8"))}>

            <div className={css(tw("sm:flex mb-4"))}>

                <div className={css(tw("sm:w-1/2 sm:mt-0 mt-8 h-auto"))}>

                <LogoImage
                    src={logoImg}
                    alt=""
                    className={css(tw("pt-3 pl-4 bg-grey-dark shadow-lg"))}
                />
                    {/* <div className={css(tw("text-teal mb-2"))}>Newsletter</div>
                    <p className={css(tw("text-grey leading-normal"))}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
                    <div className={css(tw("mt-4 flex"))}>
                        <input type="text" className={css(tw("p-2 border border-grey-light round text-grey-dark text-sm h-auto"))} placeholder="Your email address" />
                            <button className={css(tw("bg-orange text-white rounded-sm h-auto text-xs p-3"))}>Subscribe</button>
                    </div> */}
                </div>

                <div className={css(tw("sm:w-1/4 h-auto"))}>
                    <div className={css(tw("flex align-end"))}>
                        <SvgIcon 
                            src={networkSvg}
                        />
                        <div className={css(tw("text-teal align-center"))}>Social</div>
                    </div>

                    <ul className={css(tw("list-reset leading-normal"))}>
                        <li className={css(tw("hover:text-teal text-grey"))}>
                            <div className={css(tw("flex align-end"))}>
                                <SvgIcon
                                    src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg'
                                />
                                <div className={css(tw("text-grey align-center"))}></div>
                            </div>
                        </li>
                        <li className={css(tw("hover:text-teal text-grey"))}>
                            <div className={css(tw("flex align-end"))}>
                                <SvgIcon
                                    src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg'
                                />
                                <div className={css(tw("text-grey align-center"))}></div>
                            </div>
                        </li>
                        <li className={css(tw("hover:text-teal text-grey"))}>
                            <div className={css(tw("flex align-end"))}>
                                <SvgIcon
                                    src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg'
                                />
                                <div className={css(tw("text-grey align-center"))}></div>
                            </div>
                        </li>
                        <li className={css(tw("hover:text-teal text-grey"))}>
                            <div className={css(tw("flex align-end"))}>
                                <SvgIcon
                                    src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg'
                                />
                                <div className={css(tw("text-grey align-center"))}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={css(tw("sm:w-1/4 h-auto sm:mt-0 mt-8"))}>
                    <div className={css(tw("flex align-end"))}>

                    <div className={css(tw("flex align-end"))}>
                        <SvgIcon
                            src={phoneSvg}
                        />
                        <div className={css(tw("text-blue align-center"))}>Contact</div>
                    </div>

                    </div>
                    <ul className={css(tw("list-reset leading-normal"))}>
                        <li className={css(tw("hover:text-blue text-grey"))}>One</li>
                        <li className={css(tw("hover:text-blue text-grey"))}>Two</li>
                        <li className={css(tw("hover:text-blue text-grey"))}>Three</li>
                    </ul>

                    <div className={css(tw("text-blue-light mb-2 mt-4"))}>Blue-light</div>
                    <ul className={css(tw("list-reset leading-normal"))}>
                        <li className={css(tw("hover:text-blue-light text-grey"))}>One</li>
                        <li className={css(tw("hover:text-blue-light text-grey"))}>Two</li>
                        <li className={css(tw("hover:text-blue-light text-grey"))}>Three</li>
                    </ul>
                </div>
                <div className={css(tw("sm:w-1/4 h-auto sm:mt-0 mt-8"))}>
                    <div className={css(tw("text-green-dark mb-2"))}>Green-dark</div>
                    <ul className={css(tw("list-reset leading-normal"))}>
                        <li className={css(tw("hover:text-green-dark text-grey"))}>One</li>
                        <li className={css(tw("hover:text-green-dark text-grey"))}>Two</li>
                        <li className={css(tw("hover:text-green-dark text-grey"))}>Three</li>
                    </ul>

                    <div className={css(tw("text-green-light mb-2 mt-4"))}>Green-light</div>
                    <ul className={css(tw("list-reset leading-normal"))}>
                        <li className={css(tw("hover:text-green-light text-grey"))}>One</li>
                        <li className={css(tw("hover:text-green-light text-grey"))}>Two</li>
                        <li className={css(tw("hover:text-green-light text-grey"))}>Three</li>
                    </ul>
                </div>


            </div>
    </FooterSection>
)