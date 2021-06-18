import React from 'react'
import styled from 'styled-components'
import Button from './button'

function Links() {
    return (
        <Container>
            <Button text="Get Pre Approved Now!" image="https://lh3.googleusercontent.com/proxy/XHATDDUNEgz7s98j_LCmeHBBnP_nANrJBU7KktKb8OqOVQxcjqPofSLweoJJDxjha2rOetk5gZLA2VIsRmPSmrANWm63McVKRDuoAMCqXbvZQRtCRgkeKoyi7yGRXsE" className='applyIcon' link='https://www.blink.mortgage/app/signup/p/premiermortgagelendingllc/'/>
            <Button text="Spotify" image="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" className='spotifyIcon' link='https://open.spotify.com/show/6KVK8eYZuj62pu53iTABas?si=EhoGTLxQQYa2mzfsRqtY4g&dl_branch=1'/>
            <Button text="The Mike Drop" image="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" className='youtubeIcon' link='https://www.youtube.com/channel/UCrAa-LeUtudyis0KsojWyZQ'/>
            <Button text="Apple Podcast" image="https://miktysh.com.au/wp-content/uploads/2019/12/Apple-podcast-logo-transparent.png" className='appleIcon' link='https://podcasts.apple.com/us/podcast/premier-podcast/id1449991889'/>
            <a href='http://www.pmlhomeloans.com' style={{textDecoration: 'none'}}>
            <Wrap>
                <text className='buttonText'>Visit Our Website!</text>
            </Wrap>
            </a>
            
        </Container>
    )
}

export default Links


const Container = styled.div`
    margin-top: 0px;
    display: columns;
    padding: 30px 25px 100px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`

    padding: 20px;
    background-color: white;
    margin-top: 40px;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 30px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`