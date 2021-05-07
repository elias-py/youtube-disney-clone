import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

export default function Movies() {

    const movies = useSelector(selectMovies);
    console.log("This is movies", movies);

    return (
        <Container>
            <h4>Reccomended for You</h4>
            <Content>
                { movies && movies.slice(0,4).map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                ))
                }
            </Content>
            <h4>Top in your Country</h4>
            <Content>
                { movies && movies.slice(4,8).map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                ))
                }
            </Content>
            <h4>New Season</h4>
            <Content>
                { movies && movies.slice(8,12).map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                ))
                }
            </Content>
            <h4>Most Viewed</h4>
            <Content>
                { movies && movies.slice(12,16).map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                ))
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    grid-gap: 25px;
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px, rgb(0 0 0 / 73%) 0px 16px 10px --10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px, rgb(0 0 0 / 72%) 0px 30px 22px --10px;
        border-color: rgba(249,249,249,0.8);
    }

`