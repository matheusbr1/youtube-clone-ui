import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    width: 72px;
    height: calc(100vh - 56px);

    background: rgba(100, 100, 100, 0.2);
`

export const Icons = styled.div`
    display: flex;
    flex-direction: column;

    width:  100%;
`
export const Icon = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 72px;

    padding: 16px 0 14px;
    border-bottom: 1px solid gray;

    span {
        font-size: 0.75rem;
    }

`