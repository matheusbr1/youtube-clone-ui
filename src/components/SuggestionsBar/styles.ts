import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    height: 56px;
    width: calc(100% - 72px);
    
    margin-top: 56px;
    margin-left: 72px;

    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;

    overflow-x: scroll;
    overflow-y: hidden;

    @media (max-width: 880px) {
        width: 100%;
        margin-left: unset;
    }
`

export const Suggestion = styled.div`
    
    display:  block;
    
    padding: 5px 12px;
    margin: 12px 12px 12px 0;
    
    max-height: 30px;
    min-width: max-content;
    
    background-color: #F2F2F2;

    border-radius: 20px;
    border: solid 1px #DFDFDF;
`