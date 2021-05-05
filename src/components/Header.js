import React from 'react'
import styled from "styled-components"

export default function Header(props) {
    return (
        <Nav>
            <Logo>
                <img src="images/logo.svg" alt="disney" />
            </Logo>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span> 
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span> 
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span> 
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span> 
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span> 
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span> 
                </a>
            </NavMenu>
            <UserImg src="/images/profile-pic.jpeg" alt="profile-photo"/>
        </Nav>
    )
}


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.a`
    width: 80px;
    padding: 0;
    margin-top: 4px;
    max-height: 70px
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                left: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
`