import React, { useState } from 'react'
// Components
import TemplateDestination from '../components/TemplateDestination'
import { ItemData } from '../interfaces'
// Style
import styled from 'styled-components'
// Data
import data from '../data.json'
// Image
import imageBackDes from '../assets/destination/background-destination-desktop.jpg'
// Animation
import { motion } from 'framer-motion'

const Destination: React.FC = () => {
    const [allData, setAllData] = useState(data)
    console.log(allData.destinations);
    
    return (
        <StyleDestination>
            
            {allData.destinations.map((item: ItemData, key: number) => (
                <div key={key} >
                    <header>
                        <h3><span>01</span> Pick your dastination</h3>
                    </header>
                    <TemplateDestination 
                        itemDestination={item} 
                        
                    />
                </div>
            ))}
        </StyleDestination>
    )
}

const StyleDestination = styled.article`
    width: 100%;
    min-height: 100vh;
    background: url(${imageBackDes}), #0b0d17;
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
        h3 {
            font-size: 28px;
            margin-left: 14vw;
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
    }

    
`


export default Destination
