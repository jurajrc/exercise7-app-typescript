import React from 'react'
import SubNavDestination from './SubNavDestination'
// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { pageAnimate } from '../animations'
// Interface
import { ItemData } from '../interfaces'

interface Props {
    itemDestination: ItemData
}

const TemplateDestination = ({ itemDestination }: Props) => {

    const {name, images, description, distance, travel } = itemDestination
    
    
    
    return (
        <StyleSection
        
        >
            <div className="left">
                    <motion.img
                    variants={pageAnimate}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                      src={images.webp} alt={name} />
            </div>
            <div className="right">
                <div className="info">
                    <motion.div className="sub-nav" initial={false}>
                        <SubNavDestination />
                    </motion.div>
                    <h1>{name}</h1>
                    <div className='text'>
                        <p>{description}</p>
                    </div>
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
        @media (max-width: 1000px) {
            flex-direction: column;
            height: 80vh;
            align-items: center;
        }
        @media (max-width: 768px) {
            height: 85vh;
        }

        .left {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                margin-left: 20%;
                max-width: 100%;
                height: auto;
            }
            @media (max-width: 1000px) {
                width: 100%;
                img {
                    margin: 2rem 0;
                    width: 18.75em;
                    @media (max-width: 500px) {
                        width: 10.6em;
                    }
                }
            }
        }
        .right {
            width: 50%;
            @media (max-width: 1000px) {
                width: 100%;
                
            }
            .info {
                width: 70%;
                padding-left: 10%;
                padding-top: 6%;
                @media (max-width: 1150px) {
                    width: 85%;
                }
                @media (max-width: 1000px) {
                    width: 100%;
                    padding: 0 10%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
            
             h1 {
                 font-size: 6.25em;
                 text-transform: uppercase;
                 padding: 2.5rem 0;
                 @media (max-width: 1000px) {
                     font-size: 5em;
                     padding: 1.5rem 0 1rem;
                 }
                 @media (max-width: 500px) {
                     font-size: 3.5em;
                     padding: 1.4rem 0 .3rem;
                 }
             }
             .text {
                padding-bottom: 2.5em;
                border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
                margin-bottom: 1em;
                @media (max-width: 1000px) {
                    width: 100%;
                    font-size: 1em;
                    text-align: center;
                }
                @media (max-width: 500px) {
                    font-size: .93em;
                }
             }
             .parameters {
                 width: 100%;
                 display: flex;

                 @media (max-width: 1000px) {
                     justify-content: space-evenly;
                 }
                 @media (max-width: 500px) {
                    flex-direction: column;
                    align-items: center;
                    
                 }

                 .parameter {
                     width: 50%;
                     text-transform: uppercase;

                     @media (max-width: 1000px) {
                     width: auto;
                    }
                    @media (max-width: 500px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-bottom: 1.5em;
                    }
                     
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


export default TemplateDestination
