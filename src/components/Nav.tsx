import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'

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
    return (
        <StyleNav>
            <ul>
                <LiLink pathname={pathname} link="/" linkNumber={0} name="Home"/>
                <LiLink pathname={pathname} link="/destination" linkNumber={1} name="Destination" />
                <LiLink pathname={pathname} link="/crew" linkNumber={2} name="Crew" />
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
const Line = styled(motion.div)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #fff;
`
const LineHover = styled(Line)`
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.3s all ease;
`

export default Nav
