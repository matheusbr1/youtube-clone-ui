import styled from 'styled-components'
import { IoMdMenu } from 'react-icons/io'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0px;
    background: #fff;    

    width: 100%;
    height: 56px;

    padding: 0 16px;

    @media (max-width: 660px) {
        height: 48px;
        box-shadow: 0 4px 2px -2px rgba(0,0,0,0.2);
    }
`

export const Logo = styled.img`
    height: 20px;
    padding: 1px 5px;
    margin: 0 8px;
`
export const Icon = styled.img`
    height: 40px;
    padding: 8px;
    margin: 0 8px;
`
export const UserAvatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`

export const Search = styled.div`

    display: flex;

    height: 32px;
    width: 50%;
    max-width: 648px;

    input {
        width: calc(100% - 65px);
        padding: 2px 6px;
        height: 100%;
        border: 1px solid #b8b8b8;
        border-radius: 2px 2px 0 0;
    }

    button {
        border-radius: 0 2px 2px 0;
        width: 65px;
        height: 32px;
        border: 1px solid #b8b8b8;
    }

    @media (max-width: 660px) {
        
        justify-content: flex-end;
        width: unset;
        flex: 1;

        input {
            display: none;
        }
        
        button {
            border: none;
            background: transparent;
            
            svg {
                height: 20px;
                width: 20px;
            }
        }
    }
`
export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuIcon = styled(IoMdMenu)`
    margin: 0 16px 0 0;
    padding: 8px;
    width: 40px;
    height: 40px;

    @media(max-width: 660px) {
        margin: 0 4px 0 0;
    }
`