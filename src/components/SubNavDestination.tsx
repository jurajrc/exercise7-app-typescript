import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// style
import styled from 'styled-components'
import { Line } from '../styles'

const SubNavDestination = () => {
    const {pathname} = useLocation()
    //console.log(location);
    
    return (
        <StyleUl>
            <li>
                <Link to="/destination/moon" >moon</Link>
                <Line 
                    transition={{duration: 0.75}}
                    initial={{width: "0%"}}
                    animate={{ width: pathname === "/destination/moon" ? "100%" : "0%" }}
                />
                <LineHover className='link-hover'/>
            </li>
            <li>
                <Link to="/destination/mars" >mars</Link>
                <Line
                    transition={{duration: 0.75}} 
                    initial={{width: "0%"}}
                    animate={{width: pathname === "/destination/mars" ? "100%" : "0%"}}
                />
                <LineHover className='link-hover'/>
            </li>
            <li><Link to="/destination/europa" >europa</Link>
                <Line 
                    transition={{duration: 0.75}} 
                    initial={{width: "0%"}}
                    animate={{width: pathname === "/destination/europa" ? "100%" : "0%"}}
                />
                <LineHover className='link-hover'/>
            </li>
            <li>
                <Link to="/destination/titan" >titan</Link>
                <Line 
                    transition={{duration: 0.75}} 
                    initial={{width: "0%"}}
                    animate={{width: pathname === "/destination/titan" ? "100%" : "0%"}}
                />
                <LineHover className='link-hover'/>
            </li>
        </StyleUl>
    )
}

const StyleUl = styled.ul`
    padding: none;
    display: flex;
    width: 18em;
    justify-content: space-between;

    li {
        position: relative;
        padding: .6em 0;
        text-transform: uppercase;
        letter-spacing: 2.7px;
        &:hover .link-hover {
                opacity: 1;
        }
    }
             
`
const LineHover = styled(Line)`
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.3s all ease;
`

export default SubNavDestination
