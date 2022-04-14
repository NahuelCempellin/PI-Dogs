import styled from "styled-components";


export const CreateButton= styled.button`
background-color: rgba(255,255,255,0.3);
backdrop-filter: blur(20px);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
width: 95%;
border: 1px solid black;
margin-bottom: 10px;
padding: 7px;
&: hover{
    background-color: rgba(5, 5, 5, 0.795);
    backdrop-filter: blur(20px);
    color: white;
}

`