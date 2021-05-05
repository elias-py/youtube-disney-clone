import React from 'react'
import styled from 'styled-components'

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
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
                2018 · 7m · Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home getes another chance at motherhood when one of her
                dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
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