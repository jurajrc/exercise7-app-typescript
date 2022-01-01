import React from 'react'
// Style
import styled from 'styled-components'
// Images
//import destinationImage from '../assets/destination/background-destination-desktop.jpg'
// Animatio
import { motion } from 'framer-motion'
import { ItemData } from '../interfaces'

interface Props {
    itemDestination: ItemData
}

const TemplateDestination = ({ itemDestination }: Props) => {

    const {name, images, description, distance, travel } = itemDestination
    
    return (
        <StyleSection>
            <div className="left">
                    <img src={images.webp} alt="moon" />
                </div>
                <div className="right">
                    <div className="info">
                        <div className="sbut-nav">
                            <ul>
                                <li>moon
                                    <Line />
                                </li>
                                <li>mars</li>
                                <li>europa
                                    <Line />
                                </li>
                                <li>titan</li>
                            </ul>
                        </div>
                        <h1>{name}</h1>
                        <p className='text'>{description}</p>
                        <div className="parameters">
                            <div className="parameter">
                                <p>Avg. distance</p>
                                <span>{distance}</span>
                            </div>
                            <div className="parameter">
                                <p>Est. travel time</p>
                                <span>{travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </StyleSection>
    )
}

const StyleSection = styled(motion.section)`
    
        display: flex;
        width: 100%;
        height: 72vh;

        .left {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                margin-left: 20%;
            }
        }
        .right {
            width: 50%;
            .info {
                width: 70%;
                padding-left: 10%;
                padding-top: 6%;
            }
             ul {
                 padding: none;
                 display: flex;
                 width: 65%;
                 justify-content: space-between;
                 
                 li {
                     position: relative;
                     padding: .6em 0;
                     text-transform: uppercase;
                     letter-spacing: 2.7px;
                 }
             }
             h1 {
                 font-size: 6.25em;
                 text-transform: uppercase;
                 padding: 2.5rem 0;
                 
             }
             .text {
                padding-bottom: 2.5em;
                border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
                margin-bottom: 1em;
             }
             .parameters {
                 display: flex;

                 .parameter {
                     width: 50%;
                     text-transform: uppercase;
                     p {
                         font-size: 14px;
                         letter-spacing: 2.2px;
                     }
                     span {
                         font-size: 28px;
                         font-family:  'Bellefair', serif;
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

export default TemplateDestination
