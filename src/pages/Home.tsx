import React from 'react'
import { Container } from './styles'

import TopMenu from '../components/TopMenu'
import Sidebar from '../components/Sidebar'
import GridVideos from '../components/Grid'

const Home: React.FC = () => {
    return (
        <Container>
            <TopMenu />
            <Sidebar />
            <GridVideos />
        </Container>
    )
}   

export default Home