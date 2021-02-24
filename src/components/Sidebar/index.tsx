import React from 'react'
import { Container, Icons, Icon } from './styles'

import homeIcon from '../../assets/Sidebar/home.png'
import trendingIcon from '../../assets/Sidebar/trending.png'
import subscriptionsIcon from '../../assets/Sidebar/subscriptions.png'
import libraryIcon from '../../assets/Sidebar/library.png'

const Sidebar: React.FC = () => {
    return (
        <Container>
            <Icons>
                <Icon>
                    <img src={homeIcon} alt="Home" />
                    <span >Home</span>
                </Icon>
                <Icon>
                    <img src={trendingIcon} alt="Trending"/>
                    <span>Trending</span>
                </Icon>
                <Icon>
                    <img src={subscriptionsIcon} alt="Subscriptions"/>
                    <span>Subscriptions</span>
                </Icon>
                <Icon>
                    <img src={libraryIcon} alt="Library"/>
                    <span>Library</span>
                </Icon>
            </Icons>
        </Container>
    )
}   

export default Sidebar