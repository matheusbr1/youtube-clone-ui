import React from 'react'
import { GridApp } from './styles'

import TopMenu from '../components/TopMenu'
import Sidebar from '../components/Sidebar'

const Home: React.FC = ( ) => {
    return (
        <GridApp>
            <TopMenu />
            <Sidebar />
        </GridApp>
    )
}   

export default Home