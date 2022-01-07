import React from 'react'
// Components
import SubNavCrew from './SubNavCrew'
// Styled 
import styled from 'styled-components'
// data
import { ItemDataCrew } from '../interfaces'

interface Props {
    itemCrew: ItemDataCrew
}

const TemplateCrew = ({itemCrew}: Props ) => {

    const {name, images, role, bio} = itemCrew

    return (
        <StyleSection>
            <div className="crew-left">
                <h3>{role}</h3>
                <h2>{name}</h2>
                <p>{bio}</p>
                <div className="sub-nav">
                    <SubNavCrew />
                </div>
            </div>
            <div className="crew-right">
                <img src={images.webp} alt={name} />
            </div>
        </StyleSection>
    )
}
const StyleSection = styled.section`
    display: flex;
    width: 100%;
    min-height: 72vh;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 10%;
    }
    @media (max-width: 450px) {
        flex-direction: column-reverse;
        min-height: 10em;
    }
    
    .crew-left {
        width: 50%;
        //height: 100%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0;
            
            .sub-nav {
                margin: 0 auto 3em ;
            }
        }
        @media (max-width: 450px) {
                justify-content: flex-start;
                .sub-nav {
                    margin: 1.8em auto 1.2em;
                    order: 1;
                }
            }
        


        h3 {
            font-size: 32px;
            color: rgba(255, 255, 255, 0.5);
            font-family: 'Bellefair', serif;
            text-transform: uppercase;
            font-weight: lighter;
            margin: .6em 0; 
            @media (max-width: 768px) {
                margin: 0.6em auto;
            }
            @media (max-width: 450px) {
                font-size: 1em;
                order: 2;
            }
        }
        h2 {
            font-size: 56px;
            font-family: 'Bellefair', serif;
            font-weight: 200;
            text-transform: uppercase;
            margin-bottom: 1em;
            @media (max-width: 1200px) {
                font-size: 3em;
            }
            @media (max-width: 768px) {
                font-size: 40px;
                margin: 0 auto 1em;
            }
            @media (max-width: 450px) {
                font-size: 1.4em;
                order: 3;
            }
        }
        p {
            width: 70%;
            line-height: 32px;
            margin-bottom: 8em;
            @media (max-width: 1100px) {
                margin-bottom: 7em;
            }
            @media (max-width: 900px) {
                width: 90%;
                margin-bottom: 5em;
            }
            @media (max-width: 768px) {
                width: 80%;
                margin: 0 auto 2em;
                text-align: center;
            }
            @media (max-width: 450px) {
                width: 100%;
                line-height: 25px;
                order: 4;
            }
        }
    }

    .crew-right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            width: 70%;
            height: auto;
        }
        @media (max-width: 1100px) {
            justify-content: center;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
        @media (max-width: 450px) {
            width: 100%;
            height: 233px;
            margin-top: 2em;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            img {
                
                width: auto;
                height: 100%;
                //display: block;
            }
        }
    }
`

export default TemplateCrew
