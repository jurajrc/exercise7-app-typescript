import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// style
import styled from 'styled-components'
import { Line } from '../styles'
// Animation
import { motion } from 'framer-motion'
// Redux
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '..'


interface LinkName {
    name: string;
    pathname: string;
    link: string;
    linkNumber: number;
    close: () => void;
    isSub?: (path: string) => boolean;
}


// šablona pre link len neviem ako cez props dať vždy inu function
const LiLink = (props: LinkName) => {

  return (
    <li onClick={props.close} >
        <Link to={props.link}><span>0{props.linkNumber}</span> {props.name}</Link>
        <Line 
            className='line-bottom'
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: props.pathname === props.link ? "100%" : "0%"}}
        />
        {props.pathname === "/" && <LineRight />}
        <LineHoverRight className='link-hover-right'/>
        <LineHover className='link-hover'/>
    </li>
  )
}

const Nav: React.FC = () => {
    
    const isOpenNav = useSelector((state: RootState) => state.isOpenNav)

    const {pathname} = useLocation()
    
    // active subLink Destination
    const isSubDestination = (path: string) => {
      switch(path) {
        case "/destination/moon":
            return true;
        case "/destination/mars":
            return true;
        case "/destination/europa":
            return true;
        case "/destination/titan":
            return true;
        default: 
            return false
      }
    }

    // active subLink Crew
    const isSubCrew = (path: string) => {
      switch(path) {
        case "/crew/commander":
            return true;
        case "/crew/specialist":
            return true;
        case "/crew/pilot":
            return true;
        case "/crew/engineer":
            return true;
        default: 
            return false
      }
    }

    // active subLink Crew
    const isSubTechnology = (path: string) => {
      switch(path) {
        case "/technology/vehicle":
            return true;
        case "/technology/spaceport":
            return true;
        case "/technology/capsule":
            return true;
        default: 
            return false
      }
    }

    const dispatch = useDispatch()
    const closeNav = (): void => {
      dispatch({type: 'OPEN_IS'})
    }
    
    return (
        <StyleNav className={isOpenNav ? 'open-nav' : '' }>
            <ul>
                <LiLink pathname={pathname} link="/" linkNumber={0} name="Home" close={closeNav} />

                {/* <LiLink pathname={pathname} link="/destination/moon" linkNumber={1} name="Destination" close={closeNav} isSub={() => isSubDestination(pathname)} /> */}
                <li onClick={closeNav} >
                    <Link to="/destination/moon" ><span>01</span> Destination</Link>
                    <Line 
                        className='line-bottom'
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: isSubDestination(pathname) ? "100%" : "0%"}}
                    />
                    {isSubDestination(pathname) && <LineRight />}
                    <LineHoverRight className='link-hover-right'/>
                    <LineHover className='link-hover'/>
                </li>

                {/* <LiLink pathname={pathname} link="/crew/commander" linkNumber={2} name="Crew" /> */}
                <li onClick={closeNav} >
                    <Link to="/crew/commander" ><span>02</span> Crew</Link>
                    <Line 
                        className='line-bottom'
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: isSubCrew(pathname) ? "100%" : "0%"}}
                    />
                    {isSubCrew(pathname) && <LineRight />}
                    <LineHoverRight className='link-hover-right'/>
                    <LineHover className='link-hover'/>
                </li>

                {/* <LiLink pathname={pathname} link="/technology" linkNumber={3} name="Technology" /> */}

                <li onClick={closeNav} >
                    <Link to="/technology/vehicle" ><span>03</span> Technology</Link>
                    <Line 
                        className='line-bottom'
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: isSubTechnology(pathname) ? "100%" : "0%"}}
                    />
                    {isSubTechnology(pathname) && <LineRight />}
                    <LineHoverRight className='link-hover-right'/>
                    <LineHover className='link-hover'/>
                </li>
            </ul>

            
        </StyleNav>
    )
}
const StyleNav = styled.nav`
    width: 55%;
    padding: 0 2em;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(30px);
    @media (max-width: 768px) {
        width: 26em;
    }
    
    ul {
        display: flex;
        justify-content: space-evenly;
        li {
            padding: 2em 0;
            position: relative;
            font-weight: 200;
            text-transform: uppercase;
            letter-spacing: 2.7px;
            a {
                padding: 2em 0;
            }
            &:hover .link-hover {
                opacity: 1;
            }
            @media (max-width: 768px) {
                font-size: 14px;
                letter-spacing: 2.36px;
            }

            span {
                font-weight: bold;
                @media (max-width: 850px) {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 650px) {
        position: fixed;
        top: 0;
        right: 0;
        width: 70%;
        height: 100vh;
        padding: 4em 0 0 2em;
        transition: 500ms all ease;
        transform: translateX(100%);
        ul {
            flex-direction: column;
            .line-bottom {
                display: none;
            }
            li {
                padding: 0;
                a {
                    width: 100%;
                    font-size: 1em;
                    display: block;
                    padding: 1.4em 0;
                }
                &:hover .link-hover-right {
                    opacity: 1;
                }
                span {
                    display: inline-block;
                }
            }
        }
    }
    
`
const LineRight = styled(motion.div)`
    position: absolute;
    right: 0;
    top: 50%;
    height: 55%;
    width: 4px;
    background: white;
    transform: translateY(-50%);
    @media (min-width: 650px) {
        display: none;
    }
`
const LineHoverRight = styled(LineRight)`
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.3s all ease;
    @media (min-width: 650px) {
        display: none;
    }
`
const LineHover = styled(Line)`
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.3s all ease;
    @media (max-width: 650px) {
        display: none;
    }
`

export default Nav
