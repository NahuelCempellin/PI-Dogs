import styled from "styled-components";


export const PaginButton= styled.button`
background: transparent;
border: 1px solid black;
font-family: 'Roboto', sans-serif;
padding: 10px;
margin-right: 10px;
margin-bottom: 50px;
background-color: rgba(255,255,255,0.3);
backdrop-filter: blur(20px);
width: 40px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

&: hover{
    background-color: rgba(5, 5, 5, 0.795);
    backdrop-filter: blur(20px);
    color: white;
}

`

export const UlCont= styled.ul`
display: flex;
justify-content: space-arround;

`