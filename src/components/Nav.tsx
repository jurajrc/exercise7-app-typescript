import React from 'react'
// style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'


const Nav: React.FC = () => {
    return (
        <StyleNav>
            <ul>
                <li>
                    <span>00</span> Home
                    <Line />
                </li>
                <li>
                    <span>01</span> Destination
                    <LineHover className='link-hover'/>
                </li>
                <li>
                    <span>02</span> Crew
                    <LineHover className='link-hover'/>
                </li>
                <li>
                    <span>03</span> Technology
                    <LineHover className='link-hover'/>
                </li>
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
            cursor: pointer;
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
