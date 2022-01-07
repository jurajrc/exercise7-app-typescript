import React from 'react'
// Components
import Heading from '../components/Heading'

// Style
import styled from 'styled-components'
// Data

// Image
import imageBackTech from '../assets/technology/background-technology-desktop.jpg'

const Technology: React.FC = () => {
    return (
        <StyleTechnoligy>
            <Heading numSite='3' heading='Space launch 101' />

        </StyleTechnoligy>
    )
}

const StyleTechnoligy = styled.article`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackTech}), #0b0d17;
    background-blend-mode: difference;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

   
`

export default Technology
