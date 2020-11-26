import React from 'react'
import { BsSearch } from 'react-icons/bs'


import logo from '../../assets/logo.png'
import createVideo from '../../assets/createVideo.png'
import youtubeApps from '../../assets/youtubeApps.png'
import NotificationsBadge from '../../assets/NotificationsBadge.png'

import { 
    Container, 
    UserAvatar,
    Logo,
    Icon,
    Search,
    SearchInput,
    SearchButton,
    SearchButtonMobile,
    Icons,
    LeftContent,
    MenuIcon
} from './styles'

const TopMenu: React.FC = () => {
    return  (
        <Container>

            <LeftContent>
                <MenuIcon size={20} />
                <Logo src={logo} alt="Logo YouTube"/>
            </LeftContent>
            
            <Search>
                <SearchInput type="text" placeholder="Search" />
                <SearchButton>
                    <BsSearch />
                </SearchButton>                
            </Search>

            <Icons>
                <SearchButtonMobile >
                    <BsSearch />
                </SearchButtonMobile>
                <Icon src={createVideo} alt="Novo vídeo"/>
                <Icon src={youtubeApps} alt="Youtube Apps"/>
                <Icon src={NotificationsBadge} alt="Notifications"/>
                <UserAvatar 
                    src='https://yt3.ggpht.com/a-/AOh14GhTiYCPTFR0cQWjvKynpzti-6btplRKWQTlzuMbtF4=s108-c-k-c0x00ffffff-no-rj' 
                />
            </Icons>

        </Container>
    )
}

export default TopMenu