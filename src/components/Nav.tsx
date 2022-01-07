import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// style
import styled from 'styled-components'
import { Line } from '../styles'
// Animation
//import { motion } from 'framer-motion'

interface LinkName {
    name: string;
    pathname: string;
    link: string;
    linkNumber: number;
}



const LiLink = (props: LinkName) => {

  return (
    <li>
        <Link to={props.link}><span>0{props.linkNumber}</span> {props.name}</Link>
        <Line 
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: props.pathname === props.link ? "100%" : "0%"}}
        />
        <LineHover className='link-hover'/>
    </li>
  )
}

const Nav: React.FC = () => {
    const {pathname} = useLocation()
    
    // select subLink Destination
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

    //select subLink Crew
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

    
    return (
        <StyleNav>
            <ul>
                <LiLink pathname={pathname} link="/" linkNumber={0} name="Home"/>

                {/* <LiLink pathname={pathname} link={() => isSubDestination(pathname)} linkNumber={1} name="Destination" /> */}
                <li>
                    <Link to="/destination/moon" ><span>01</span> Destination</Link>
                    <Line 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: isSubDestination(pathname) ? "100%" : "0%"}}
                    />
                    <LineHover className='link-hover'/>
                </li>

                {/* <LiLink pathname={pathname} link="/crew/commander" linkNumber={2} name="Crew" /> */}
                <li>
                    <Link to="/crew/commander" ><span>02</span> Crew</Link>
                    <Line 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: isSubCrew(pathname) ? "100%" : "0%"}}
                    />
                    <LineHover className='link-hover'/>
                </li>

                <LiLink pathname={pathname} link="/technology" linkNumber={3} name="Technology" />
            </ul>
        </StyleNav>
    )
}
const StyleNav = styled.div`
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
            }

            span {
                font-weight: bold;
                @media (max-width: 850px) {
                    display: none;
                }
            }
        }
    }
`

const LineHover = styled(Line)`
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.3s all ease;
`

export default Nav
