import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// style
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface LinkName {
    path: string
    pathName: string
}

const LinkRepeat = ({path, pathName}: LinkName) => {
  return(
    <motion.li 
        transition={{duration: 0.25}}
        initial={{background: "#ffffff2b"}}
        animate={{background: path === pathName ? "#fff" : "#ffffff2b"}}
    >
        <Link to={path} />
    </motion.li>
  )
}

const SubNavCrew = () => {
    const {pathname} = useLocation()
    return (
        <StyleUl>
            <LinkRepeat path="/crew/commander" pathName={pathname} />
            <LinkRepeat path="/crew/specialist" pathName={pathname} />
            <LinkRepeat path="/crew/pilot" pathName={pathname} />
            <LinkRepeat path="/crew/engineer" pathName={pathname} />
        </StyleUl>
    )
}
const StyleUl = styled.ul`
    width: 9.25em;
    padding: none;
    display: flex;
    justify-content: space-between;
    @media (max-width: 450px) {
        width: 5.5em;
    }
    

    li {
        width: 0.9375em;
        height: 0.9375em;
        background: rgba(255, 255, 255, 0.17);
        border-radius: 50%;
        overflow: hidden;
        @media (max-width: 450px) {
            font-size: 75%;
        }

        a {
            width: 0.9375em;
            height: 0.9375em;
            display: block;
            transition: 0.3s all ease;
            &:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
            
        }
    }
`


export default SubNavCrew
