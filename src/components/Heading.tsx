import React from 'react'
// Style
import styled from 'styled-components'

interface textProps {
    numSite: string
    heading: string
}

const Heading = ({numSite, heading}: textProps) => {
    return (
        <StyleHeader>
            <h3><span>0{numSite}</span> {heading}</h3>
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    width: 100%;
    height: 28vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    h3 {
        width: 100%;
        font-size: 28px;
        padding-left: 10%;
        letter-spacing: 4.72px;
        font-family: 'Barlow Condensed', sans-serif;
        text-transform: uppercase;
        font-weight: 200;
        @media (max-width: 768px) {
            padding-left: 3%;
        }
        span {
            letter-spacing: 4.72;
            color: rgba(255, 255, 255, 0.25);
            font-weight: bold;
            margin-right: 0.5em;
        }
    }
        
    @media (max-width: 1000px) {
        height: 22vh;
        h3 {
            font-size: 20px;
            margin-left: 6vw;
        }
    }
    @media (max-width: 768px) {
        height: 8em;
    }
    @media (max-width: 450px) {
        height: 6em;
        h3 {
            padding-left: 0;
            margin-left: 0;
            text-align: center;
            font-size: 1em;
            letter-spacing: 2.7px;
        }
    }
`

export default Heading
