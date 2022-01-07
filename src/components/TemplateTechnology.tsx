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
    .tech-left {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 4%;
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
        }
        p {
            width: 75%;
        }
    }

    .tech-right {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        @media (min-width: 1600px) {
            justify-content: center;
        }
    }
`

export default TemplateTechnology
