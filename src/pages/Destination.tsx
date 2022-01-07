import React from 'react'
import { Outlet } from 'react-router-dom';
// Components
import Heading from '../components/Heading';

// Style
import styled from 'styled-components'
// Data

// Image
import imageBackDes from '../assets/destination/background-destination-desktop.jpg'
import imageBackTablet from '../assets/destination/background-destination-tablet.jpg'
import imageBackMobile from '../assets/destination/background-destination-mobile.jpg'
// Animation
import { motion } from 'framer-motion'

const Destination: React.FC = () => {
    
    
    return (
        <StyleDestination>
            
            <Heading numSite='1' heading='Pick your destination' />

            <Outlet />

        </StyleDestination>
    )
}

const StyleDestination = styled(motion.article)`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackDes}), #0b0d17;
    background-blend-mode: difference;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
    @media (max-width: 1000px) {
        height: 60em;
    }
    @media (max-width: 768px) {
        height: 57em;
        background: url(${imageBackTablet}), #0b0d17;
        background-blend-mode: difference;
        background-position: center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-attachment: fixed;
    }
    @media (max-width: 450px) {
        height: 55em;
        background: url(${imageBackMobile}), #0b0d17;
        background-blend-mode: difference;
        background-position: center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-attachment: fixed;
    }

`


export default Destination
