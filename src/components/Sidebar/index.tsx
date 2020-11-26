import React from 'react'
import { Container, Icons, Icon } from './styles'

const Sidebar: React.FC = () => {
    return (
        <Container>
            <Icons>
                <Icon>
                    <span>Home</span>
                </Icon>
                <Icon>
                    <span>Trending</span>
                </Icon>
                <Icon>
                    <span>Subscriptions</span>
                </Icon>
                <Icon>
                    <span>Library</span>
                </Icon>
            </Icons>
        </Container>
    )
}   

export default Sidebar