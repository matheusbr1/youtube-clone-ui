import React from 'react'
import { Container } from './styles'

import TopMenu from '../components/TopMenu'
import Sidebar from '../components/Sidebar'
import GridVideos from '../components/Grid'
import SuggestionsBar from '../components/SuggestionsBar'

const Home: React.FC = () => {
    return (
        <Container>
            <TopMenu />
            <SuggestionsBar />
            <Sidebar />
            <GridVideos />
        </Container>
    )
}   

export default Home