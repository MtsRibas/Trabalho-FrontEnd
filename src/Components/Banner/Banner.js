import React from "react";
import styled from "styled-components";



const TxtBanner = styled.div `
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    padding: 7rem 0 0 0;
`;

const H1 = styled.p `
    margin: 0;
    font-size: 60px;
    font-weight: medium;
`
const Destaque = styled.span `
    font-weight: bold;
`

const H3 = styled.p `
    font-size: 35px;
    margin:0
`

const Button = styled.button`
    font-family: Helvetica, sans-serif;
    padding: 16px 48px;
    border-radius: 16px;
    background-color: #0084ff;
    border: 2px solid #0084ff;
    color: #ffff;
    font-size: 16px;
    font-weight: medium;
    cursor: pointer;

    margin-top: 4rem;
    &:hover{
        background-color: #024889;
        border: 2px solid #024889;
        box-sahdow: 
    }
`


export class Banner extends React.Component {
    render(){
        return (
            <>
                <TxtBanner> 
                    <H1>Bem vindo ao <Destaque>blogCria</Destaque>,</H1>
                    <H3>o lugar das postagens de “cria”!</H3>
                    <Button>Criar Postagem</Button>
                </TxtBanner>               
            </>
        )
    }
}