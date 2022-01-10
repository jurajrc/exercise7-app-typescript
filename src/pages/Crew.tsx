import React from 'react'
import { Outlet } from 'react-router-dom'
// Components
import Heading from '../components/Heading'

// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { pageAnimate } from '../animations'
// Image
import imageBackDesktop from '../assets/crew/background-crew-desktop.jpg'
import imageBackTablet from '../assets/crew/background-crew-tablet.jpg'
import imageBackMobile from '../assets/crew/background-crew-mobile.jpg'

const Crew: React.FC = () => {
    return (
        <StyleCrew
            variants={pageAnimate}
            initial="hidden"
            animate="show"
            exit="exit"
        >   
            <Heading numSite='2' heading='Meet your crew' />
            <Outlet />
        </StyleCrew>
    )
}
    const StyleCrew = styled(motion.article)`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackDesktop}), #0b0d17;
    background-blend-mode: difference;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    @media (max-width: 768px) {
        background: url(${imageBackTablet}), #0b0d17;
        background-position: center;
        background-size: cover;
        overflow: visible;
        overflow-x: hidden;
    }
    @media (max-width: 450px) {
        background: url(${imageBackMobile}), #0b0d17;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    
`

export default Crew
