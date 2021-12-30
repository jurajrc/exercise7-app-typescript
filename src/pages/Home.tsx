import React from 'react'
// Style
import styled from 'styled-components'
// Image
import HomeBack from '../assets/home/background-home-desktop.jpg'
import HomeBackTablet from '../assets/home/background-home-tablet.jpg'
import HomeBackMobile from '../assets/home/background-home-mobile.jpg'
// Animatio
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <StyleHome>
            <div className="home-left">
                <h5>So, you want to travel to</h5>
                <h1>Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="home-right">
                <button>Explore</button>
            </div>
        </StyleHome>
    )
}

const StyleHome = styled(motion.article)`
    width: 100%;
    height: 100vh;
    background: url(${HomeBack});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 12em;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: url(${HomeBackTablet});
        background-position: center;
        background-size: cover;
    }
    @media (max-width: 400px) {
        background: url(${HomeBackMobile});
        background-position: center;
        background-size: cover;
        padding-top: 8em;
    }

    .home-left {
        width: 450px;
        @media (max-width: 768px) {
            text-align: center;
        }
        h1 {
            text-transform: uppercase;
            transform: translateX(-11px);
            @media (max-width: 768px) {
              transform: none;
            }
        }
        @media (max-width: 500px) {
            max-width: 90%;
            margin: 0 5%;
        }
    }
    .home-right {
        margin-top: 3em;
        align-items: center;
        width: 17.125em;
        height: 17.125em;
        @media (max-width: 768px) {
            margin-top: 10em;
        }
        @media (max-width: 500px) {
            margin-top: 6em;
        }
        
        button {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            font-size: 2em;
            border: none;
            text-transform: uppercase;
            font-family: 'Bellefair', serif;
            letter-spacing: 2px;
            transition: 0.3s all ease;
            cursor: pointer;
            &:hover {
                box-shadow: 0px 0px 0px 88px rgba(255,255,255,0.1);
            }
            
        }
        @media (max-width: 768px) {
            font-size: 90%;
        }
        @media (max-width: 500px) {
            font-size: 50%;
            button {
                &:hover {
                    box-shadow: 0px 0px 0px 50px rgba(255,255,255,0.1);
                }
            }
        }
    }

`

export default Home
