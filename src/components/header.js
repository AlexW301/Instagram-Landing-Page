import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.png" />
            <NavMenu>
                <a href="https://pmlhomeloans.com">
                    <img src="/images/home-icon.svg" alt="website"/>
                    <span>WEBSITE</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="apply"/>
                    <span>APPLY</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="review"/>
                    <span>LEAVE REVIEW</span>
                </a>
            </NavMenu>
        </Nav>
        
    )
}

export default Header

const Nav = styled.div`
    height: 100%;
    background: linear-gradient(to bottom, #800000 0%, #cc0000 100%);
    display: flex;
    align-items: center;
    padding 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: white;
        
        img {
            height: 20px;
        }

        span {
            font-size: 13;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-orgin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span: after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`