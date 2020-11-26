import React from 'react'
import { Container, Thumb } from './style'

const Video: React.FC = () => {
    return (
        <Container>
            <Thumb>Thumb</Thumb>
            <p>Vídeo Title</p>
            <span>Channel name</span>
            <span>33.2K views 4 hours ago</span>
        </Container>
    )
}

export default Video