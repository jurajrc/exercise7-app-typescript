import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
// Components

// Style
import styled from 'styled-components'
// Data
import data from '../data.json'
// Image
import imageBackDes from '../assets/destination/background-destination-desktop.jpg'
import imageBackTablet from '../assets/destination/background-destination-tablet.jpg'
import imageBackMobile from '../assets/destination/background-destination-mobile.jpg'
// Animation
import { motion } from 'framer-motion'

const Destination: React.FC = () => {
    const [allData, setAllData] = useState(data)
    
    return (
        <StyleDestination>
            
            <header>
                <h3><span>01</span> Pick your dastination</h3>
            </header>

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

    header {
        width: 100%;
        height: 28vh;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        h3 {
            width: 100%;
            font-size: 28px;
            padding-left: 14vw;
            letter-spacing: 4.72px;
            font-family: 'Barlow Condensed', sans-serif;
            text-transform: uppercase;
            font-weight: 200;
            span {
                letter-spacing: 4.72;
                color: rgba(255, 255, 255, 0.25);
                font-weight: bold;
                margin-right: 0.5em;
            }
        }
        
        @media (max-width: 1000px) {
            height: 20vh;
            h3 {
                font-size: 20px;
                margin-left: 6vw;
            }
        }
        @media (max-width: 768px) {
            height: 15vh;
        }

    }

    
`


export default Destination
