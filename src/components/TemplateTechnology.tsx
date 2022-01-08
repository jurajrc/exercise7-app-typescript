import React from 'react'
// Somponents
import SubNavTechnology from './SubNavTechnology'
// Style
import styled from 'styled-components'
// Data interface
import { ItemTech } from '../interfaces'

interface Props {
    itemTech: ItemTech
}

const TemplateTechnology = ({ itemTech }: Props) => {

    const {name, images, description} = itemTech

    return (
        <StyleSection>
            <div className="tech-left">
                <SubNavTechnology />
            </div>
            <div className="tech-center">
                <h4>The Technology...</h4>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="tech-right">
                <picture>
                    <source media='(max-width: 768px)' srcSet={images.landscape}/>
                    <img src={images.portrait} alt={name} />
                </picture>
            </div>
        </StyleSection>
    )
}
const StyleSection = styled.section`
    display: flex;
    margin-top: 2em;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 0;
    }

    .tech-left {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 4%;

        @media (max-width: 768px) {
            order: 2;
            width: 100%;
            padding-left: 0;
        }
    }

    .tech-center {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
            font-size: 1em;
            text-transform: uppercase;
            color: #d0d6f9;
            letter-spacing: 2.7px;
            font-weight: 200;
            margin-bottom: 0.8em;
        }

        h2 {
            font-size: 3.375em;
            font-family: 'Bellefair', serif;
            text-transform: uppercase;
            font-weight: lighter;
            margin-bottom: 0.3em;
            @media (max-width: 1010px) {
                font-size: 2.7em;
            }
        }

        p {
            width: 75%;
            @media (max-width: 950px) {
                width: 90%;
            }
        }

        @media (max-width: 768px) {
            order: 3;
            width: 100%;
            text-align: center;
            padding-top: 2em;
            h4 {
                margin: 0.8em 0;
            }
            h2 {
                font-size: 2.5em;
            }
            p {
                width: 100%;
                padding: 0 20%;
            }
        }
        
        @media (max-width: 450px) {
            padding-top: 1em;
            h4 {
                font-size: 0.875em;
            }
            h2 {
                font-size: 1.5em;
            }
            p {
                padding: 0 6%;
            }
        }
    }

    .tech-right {
        width: 40%;
        display: flex;
        justify-content: flex-end;

        img {
            width: 100%;
            height: auto;
        }
        @media (min-width: 1600px) {
            justify-content: center;
        }
        @media (max-width: 768px) {
            order: 1;
            width: 100%;
            margin: 3em 0 2em;

            img {
                width: 100%;
                height: auto;
            }
        }
        @media (max-width: 450px) {
            margin: 2em 0 1.625em;
        }
    }
`

export default TemplateTechnology
