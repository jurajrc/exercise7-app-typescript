import React from 'react'
// Components
import Heading from '../components/Heading'

// Style
import styled from 'styled-components'
// Data

// Image
import imageBackTechDesktop from '../assets/technology/background-technology-desktop.jpg'
import imageBackTechTablet from '../assets/technology/background-technology-tablet.jpg'
import imageBackTechMobile from '../assets/technology/background-technology-mobile.jpg'
import { Outlet } from 'react-router-dom'

const Technology: React.FC = () => {
    return (
        <StyleTechnoligy>
            <Heading numSite='3' heading='Space launch 101' />
            <Outlet />
        </StyleTechnoligy>
    )
}

const StyleTechnoligy = styled.article`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackTechDesktop}), #0b0d17;
    background-blend-mode: difference;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px) {
        background: url(${imageBackTechTablet}), #0b0d17;
        background-position: center;
        background-size: cover;
    }
    
    @media (max-width: 450px) {
        background: url(${imageBackTechMobile}), #0b0d17;
        background-position: center;
        background-size: cover;
    }
   
`

export default Technology
