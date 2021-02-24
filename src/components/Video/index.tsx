import React from 'react'
import { Container, Thumb, VideoInfosContainer, Infos } from './style'
import { UserAvatar } from './style'
const Video: React.FC = () => {
    return (
        <Container>
            
            {/* <Thumb src="https://via.placeholder.com/300/F4F4F4/000000/?text=thumb" /> */}
            <Thumb src="https://i.ytimg.com/vi/OjWmFNXyPUc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDftg_GnRdbb1rZfMTnQK0BO04UXg" />

            <VideoInfosContainer>
                <UserAvatar src="https://yt3.ggpht.com/ytc/AAUvwnj1NAakhChON4ASoRcaadq_Jg34p9FxWkyHHLM5=s68-c-k-c0x00ffffff-no-rj" />
                <Infos>
                    <p>Slow Blues Songs Compilation ♪ Greatest Slow Blues Songs Playlist</p>
                    <span>Blues R&B Soul Experience 2020</span>
                    <span>33.2K views 4 hours ago</span>
                </Infos>
            </VideoInfosContainer>

        </Container>
    )
}

export default Video