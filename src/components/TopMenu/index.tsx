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
    Icons
} from './styles'

const TopMenu: React.FC = () => {
    return  (
        <Container>

            <Logo src={logo} alt="Logo YouTube"/>
            
            <Search>
                <input type="text" placeholder="Search" />
                <button>
                    <BsSearch />
                </button>                
            </Search>

            <Icons>
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