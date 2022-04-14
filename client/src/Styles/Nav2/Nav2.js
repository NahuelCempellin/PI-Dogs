import styled from 'styled-components';

export const ContNav= styled.div`
border: 1px solid black;
width: 5px;
height: 50px;
position: fixed;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow: hidden;
background-color: rgba(255,255,255,0.3);
backdrop-filter: blur(20px);
z-index: 1;


&:hover{
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    transition-duration: 5s;
    transition-property: margin-left;
}
`
