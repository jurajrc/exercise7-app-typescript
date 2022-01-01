import React, { useState } from 'react'
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
            <header>
                <h3><span>01</span> Pick your dastination</h3>
            </header>
            <section>
                <div className="left">
                    <img src={allData.destinations[0].images.webp} alt="moon" />
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
                        <h1>{allData.destinations[0].name}</h1>
                        <p className='text'>{allData.destinations[0].description}</p>
                        <div className="parameters">
                            <div className="parameter">
                                <p>Avg. distance</p>
                                <span>{allData.destinations[0].distance}</span>
                            </div>
                            <div className="parameter">
                                <p>Est. travel time</p>
                                <span>{allData.destinations[0].travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <h3><span>01</span> Pick your dastination</h3>
            </header>
            <section>
                <div className="left">
                    <img src={allData.destinations[1].images.webp} alt="moon" />
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
                        <h1>{allData.destinations[1].name}</h1>
                        <p className='text'>{allData.destinations[1].description}</p>
                        <div className="parameters">
                            <div className="parameter">
                                <p>Avg. distance</p>
                                <span>{allData.destinations[1].distance}</span>
                            </div>
                            <div className="parameter">
                                <p>Est. travel time</p>
                                <span>{allData.destinations[1].travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <h3><span>01</span> Pick your dastination</h3>
            </header>
            <section>
                <div className="left">
                    <img src={allData.destinations[2].images.webp} alt="moon" />
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
                        <h1>{allData.destinations[2].name}</h1>
                        <p className='text'>{allData.destinations[2].description}</p>
                        <div className="parameters">
                            <div className="parameter">
                                <p>Avg. distance</p>
                                <span>{allData.destinations[2].distance}</span>
                            </div>
                            <div className="parameter">
                                <p>Est. travel time</p>
                                <span>{allData.destinations[2].travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <h3><span>01</span> Pick your dastination</h3>
            </header>
            <section>
                <div className="left">
                    <img src={allData.destinations[3].images.webp} alt="moon" />
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
                        <h1>{allData.destinations[3].name}</h1>
                        <p className='text'>{allData.destinations[3].description}</p>
                        <div className="parameters">
                            <div className="parameter">
                                <p>Avg. distance</p>
                                <span>{allData.destinations[3].distance}</span>
                            </div>
                            <div className="parameter">
                                <p>Est. travel time</p>
                                <span>{allData.destinations[3].travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
    section {
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

export default Destination
