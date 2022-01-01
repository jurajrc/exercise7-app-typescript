import React from 'react'
// Style
import styled from 'styled-components'
// Data
import data from '../data.json'
// Image
import imageBackCrew from '../assets/crew/background-crew-desktop.jpg'

const Crew: React.FC = () => {
    return (
        <StyleCrew>
            <h1>Crew</h1>
        </StyleCrew>
    )
}
const StyleCrew = styled.article`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackCrew}), #0b0d17;
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

export default Crew
