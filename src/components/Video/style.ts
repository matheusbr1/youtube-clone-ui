import styled from 'styled-components'

export const Container = styled.div`
    max-width: 360px;    

    @media (max-width: 660px) {
        max-width: 320px;
        margin: auto;
        margin-top: 40px;
    }
`

export const Thumb = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
    background: rgba(200, 200, 200, 0.2);

    @media (max-width: 660px) {
        height: 180px;
    }
`
export const UserAvatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 12px;
`

export const VideoInfosContainer = styled.div`
    display: flex;
    margin-top: 12px;
`
export const Infos  = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 24px;

    font-size: 14px;

    p {
        color: #030303;
        font-weight: 500;
        margin-bottom: 6px;
    }

    span {
        color: #606060;
    }
`