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
    opacity: 0.7;

    @media(max-width: 660px) {
        margin: 0 4px 0 0;
    }
`

export const Logo = styled.img`
    height: 20px;
    padding: 1px 5px;
    margin: 0 8px;
`

export const Search = styled.div`
    display: flex;

    height: 32px;
    width: 50%;
    max-width: 648px;

    @media (max-width: 660px) {
        justify-content: flex-end;
        width: unset;
        flex: 1;
    }
`

export const SearchInput = styled.input`
    width: calc(100% - 65px);
    height: 100%;
    
    padding: 2px 6px;
    
    border: 1px solid #b8b8b8;
    border-radius: 2px 2px 0 0;

    @media (max-width: 660px) {
        display: none;
    }
`
export const SearchButton = styled.button`
    width: 65px;
    height: 32px;
    
    border: 1px solid #b8b8b8;
    border-radius: 0 2px 2px 0;

    @media (max-width: 660px) {
        display: none
    }
`

export const SearchButtonMobile = styled.div`
    height: 40px;
    width: 40px;
    padding: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.7;

    @media (min-width: 660px) {
        display: none
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 660px) {
        img:nth-child(4) {
            display: none;
        }
    }
`
export const Icon = styled.img`
    height: 40px;
    padding: 8px;
    margin: 0 8px;
    opacity: 0.7;

    @media (max-width: 660px) {
        margin: unset;
    }
`
export const UserAvatar = styled.img`
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 50%;
`