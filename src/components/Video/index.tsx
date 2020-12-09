import React from 'react'
import { Container, Thumb, VideoInfosContainer, Infos } from './style'
import { UserAvatar } from './style'
const Video: React.FC = () => {
    return (
        <Container>
            
            <Thumb>Thumb</Thumb>
            
            <VideoInfosContainer>
                <UserAvatar>
                    <img src="https://yt3.ggpht.com/a-/AOh14GhTiYCPTFR0cQWjvKynpzti-6btplRKWQTlzuMbtF4=s108-c-k-c0x00ffffff-no-rj" alt=""/>
                </UserAvatar>
                <Infos>
                    <p>Hard Rock Music | Best Hard Rock Songs Of 70s 80s 90s</p>
                    <span>Music Collection</span>
                    <span>33.2K views 4 hours ago</span>
                </Infos>
            </VideoInfosContainer>

        </Container>
    )
}

export default Video