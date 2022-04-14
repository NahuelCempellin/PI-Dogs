import styled from 'styled-components'

export const Select= styled.select`
appearance: none;
width: 95%;
margin-top: 10px;
border: 1px solid black;
background-color: rgba(255,255,255,0.3);
backdrop-filter: blur(20px);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
select-styles: none;
padding: 5px;
&: hover{
    background-color: rgba(5, 5, 5, 0.795);
    backdrop-filter: blur(20px);
    color: white;
}


`