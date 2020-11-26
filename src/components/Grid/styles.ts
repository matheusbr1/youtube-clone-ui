import styled from 'styled-components'

export const Container = styled.div`
    
    display: grid;
    grid-gap: 2.5% 1.5%;

    background: #F9F9F9;
    width: 100%;

    padding-top: 56px;
    padding-left: calc(72px + 2.5%);
    padding-right: 2.5%;

    @media(max-width: 524px) {
        grid-template-columns: 1fr;
        grid-gap: unset;
    }

    @media(min-width: 525px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 879px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media(min-width: 880px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1140px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media(min-width: 1800px) {
        grid-template-columns: repeat(5, 1fr);
    }
`