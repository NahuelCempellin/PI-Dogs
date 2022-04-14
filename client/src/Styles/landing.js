import styled from 'styled-components';


export const Slyder= styled.div`
width: 90%;
margin: auto;
overflow:hidden;
margin-right: 500px;


padding: 0;

@keyframes cambio{
    0% {margin-left: 0;}
    20%{margin-left: 0;}

    25%{margin-left: -100%;}
    45%{margin-left: -100%;}

    50%{margin-left: -200%;}
    70%{margin-left: -200%;}

    75%{margin-left: -300%;}
    100%{margin-left: -300%;}
}

`

export const Ul= styled.ul`
display: flex;
padding: 0;
width: 600%;
overflow: hidden;
animation: cambio 20s infinite alternate;

`

export const Li= styled.li`
list-style: none;
width:100%;



img{
    width: 100%;
    height:50%;
    border: 1px solid black;
    
    
}

`
export const P = styled.p`
width: 50%;
color: white;





`
export const Div= styled.div`
border: 2px solid black;
border-radius: 10px;
background-color: rgba(107, 106, 106, 0.603);

box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
backdrop-filter: blur(20px);
display: flex;
justify-content: center;
width:500px;
height: 300px;



`
export const Div2= styled.div`
display:flex;
flex-direction: column;
margin: 0;
padding:0;
width: 50%;
`

export const DivContTotal= styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-top: 145px;
font-family: 'Roboto', sans-serif;
color: white;
h1{
    color:black;
}

`