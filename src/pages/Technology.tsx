import React from 'react'
// Style
import styled from 'styled-components'
// Data
import data from '../data.json'
// Image
import imageBackTech from '../assets/technology/background-technology-desktop.jpg'

const Technology: React.FC = () => {
    return (
        <StyleTechnoligy>
            <h1>Techonology</h1>
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

    header {
        width: 100%;
        height: 28vh;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        
    }
`

export default Technology
