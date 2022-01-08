import React from 'react'
// Components
import Nav from './Nav'

// style
import styled from 'styled-components'
import path from '../assets/header-path.svg'
// Animation
import { motion } from 'framer-motion'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '..'


const Header: React.FC = () => {

    const isOpenNav = useSelector((state: RootState) => state.isOpenNav)
    const dispatch = useDispatch()

    return (
        <StyleHeader>
            <div className="icon">
                <img src={path} alt="path" />
            </div>
            <LineHeader className="line"></LineHeader>

            <Burger onClick={() => dispatch({ type: 'OPEN_IS' })}>
                <Line1 className={isOpenNav ? "l1" : ""}/>
                <Line2 className={isOpenNav ? "l2" : ""}/>
                <Line3 className={isOpenNav ? "l3" : ""}/>
            </Burger>

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

    .open-nav {
        transform: translateX(0%);
    }

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
        @media (max-width: 650px) {
            margin: 1em;
        }
        @media (max-width: 450px) {
            margin-left: 1em;
        }
    }
`
const LineHeader = styled.div`
    width: 33%;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(15%);
    z-index: 2;
    @media (max-width: 850px) {
        display: none;
    }
`
const Burger = styled.div`
    width: 1.4em;
    height: 1.2em;
    position: absolute;
    top: 1.8em;
    right: 1.8em;
    cursor: pointer;
    display: none;
    z-index: 10;
    @media screen and (max-width: 650px) {
        display: block;
    }
    @media (max-width: 500px) {
        top: 1.3em;
    }
    .l1 {
    transform: rotate(45deg) translate(26%, 250%);
    }
    .l2 {
        transform: translateY(-50%) translateX(100%);
        opacity: 0;
    }
    .l3 {
        transform: rotate(-45deg)translate(26%, -250%);
    }
`
const LineBurger = styled(motion.div)`
    width: 1.4em;
    height: 0.15em;
    background: white;
    position: absolute;
    transition: 500ms all ease;
    
`
const Line1 = styled(LineBurger)`
    top: 0;
    transform: rotate(0deg) translate(0%, 0%);
    
`
const Line2 = styled(LineBurger)`
    top: 50%;
    transform: translateY(-50%);
`
const Line3 = styled(LineBurger)`
    bottom: 0;
    transform: rotate(0deg) translate(0%, 0%);
`

export default Header
