import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
// style
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface LinkName {
    path: string;
    pathName: string;
    name: string;
}

const LinkRepeat = ({path, pathName, name}: LinkName) => {
    return (
        <motion.li
            transition={{duration: 0.3}}
            initial={{background: "transparent"}}
            animate={{background: path === pathName ? "#fff" : "transparent"}}
        >
            <NavLink to={path}>{name}</NavLink>
        </motion.li>
    )
}

const SubNavTechnology = () => {
    const {pathname} = useLocation()
    return (
        <StyleUl>
            <LinkRepeat path="/technology/vehicle" pathName={pathname} name="1"/>
            <LinkRepeat path="/technology/spaceport" pathName={pathname} name="2"/>
            <LinkRepeat path="/technology/capsule" pathName={pathname} name="3"/>
        </StyleUl>
    )
}

const StyleUl = styled.ul`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    li {
        width: 5em;
        height: 5em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.25);
        transition: 0.3s all ease;
        font-family: 'Bellefair', serif;
        margin: 0.8em 0;

        @media (max-width: 768px) {
            margin: 0.5em;
            width: 3.75em;
            height: 3.75em;
        }

        @media (max-width: 450px) {
            margin: 0.5em;
            width: 2.5em;
            height: 2.5em;
        }

        &:hover {
            border: 1px solid rgba(255, 255, 255);
        }

        a {
            font-size: 2em;
            line-height: 2.5em;
            text-align: center;
            width: 100%;
            height: 100%;

            color: white;
            @media (max-width: 768px) {
                font-size: 1.5em;
            }

            @media (max-width: 450px) {
                font-size: 1em;
                line-height: 2.6em;
            }
        }

        .active {
            color: black;
        }
    }
`

export default SubNavTechnology
