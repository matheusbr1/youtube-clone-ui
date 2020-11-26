import styled from 'styled-components'

export const Container = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1%;

    width: 100%;
    height: 100vh;

    padding-left: calc(72px + 2.5%);
    padding-right: 2.5%;
    padding-top: 56px;

    background: #F9F9F9;

    @media(max-width: 660px) {
        grid-template-columns: 1fr;
        
        padding-left: 5%;
        padding-right: 5%;

    }
`