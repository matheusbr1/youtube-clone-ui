import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    position: fixed;
    bottom: 0px;
    left: 0;

    width: 72px;
    height: calc(100vh - 56px);

    @media(max-width: 880px) {
        display: none;
    }
`

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    
    width:  100%;
`
export const Icon = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 72px;
    height: 74px;

    opacity: 0.6;
    padding: 16px 0 14px;

    span {
        font-size: 10px;
        line-height: 1.4rem;
    }
`