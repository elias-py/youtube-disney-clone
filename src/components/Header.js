import React, { useEffect } from 'react'
import styled from "styled-components"
import {
    selectUserEmail,
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin,
} from "../features/users/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { auth, provider } from "../firebase"
import { useHistory } from "react-router-dom"

export default function Header(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                history.push("/")
            }
            
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            history.push("/")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut())
            history.push("/login")
        })
        
    }

    return (
        <Nav>
            <Logo>
                <img src="images/logo.svg" alt="disney" />
            </Logo>
            { !userName ?
                <Login onClick={signIn}>Login</Login> :
                <>
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
                { userPhoto ?
                    <UserImg onClick={signOut} src={userPhoto} alt="profile-photo"/> :
                    <>
                        <UserImg src="/images/profile-pic.jpeg" />
                    </>
                }
                
                </> 
            }
            
            
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
    max-height: 70px;
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

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 250ms ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`