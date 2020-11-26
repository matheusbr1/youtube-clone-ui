import styled from 'styled-components'

export const Container = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5% 1.5%;

    width: 100%;

    padding-top: 56px;
    padding-left: calc(72px + 2.5%);
    padding-right: 2.5%;

    background: #F9F9F9;

    @media(max-width: 660px) {
        grid-template-columns: 1fr;
        grid-gap: unset;

        padding-left: 5%;
        padding-right: 5%;
    }
`