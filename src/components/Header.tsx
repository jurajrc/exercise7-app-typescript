import React from 'react'
// Components
import Nav from './Nav'

// style
import styled from 'styled-components'
import path from '../assets/header-path.svg'

const Header: React.FC = () => {
    return (
        <StyleHeader>
            <div className="icon">
                <img src={path} alt="path" />
            </div>
            <Line className="line"></Line>
            <Nav />
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    position: fixed;
    top: 3em;
    left: 0;
    right: 0;
    width: 100%; 
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        top: 0;
    }

    .icon {
        width: 3em;
        height: 3em;
        background: #fff;
        border-radius: 50%;
        margin-left: 3em;
        img {
            width: 100%;
            height: 100%;
        }
    }
`
const Line = styled.div`
    width: 33%;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(15%);
    z-index: 2;
    @media (max-width: 850px) {
        display: none;
    }
`

export default Header
