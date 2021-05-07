import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from '../firebase';

export default function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                setMovie(doc.data())
            } else {
                // asd
            }
        })
    }, [])

    console.log("asdasd", movie);

    return (
        <Container>
            { movie && (
                <>
                <Background>
                    <img src={movie.backgroundImg} alt="" />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} alt="" />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <PlusButton>
                        <span>+</span>
                    </PlusButton>
                    <GroupButton>
                        <img src="/images/group-icon.png" alt="" />
                    </GroupButton>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
                </>
            )}
            
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    height: 56px;
    font-size: 15px;
    border-radius: 4px;
    border: none;
    letter-spacing: 1.8px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: rgb(249, 249, 249);

    &:hover {
        background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solud rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const PlusButton = styled.button`
    margin-right: 16px;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    border: 2px solid white;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 25px;
        color: white;
    }
`

const GroupButton = styled(PlusButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`