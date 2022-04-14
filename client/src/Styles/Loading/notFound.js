import styled from "styled-components";


export const ContN= styled.div`
display: flex;
border: 1px solid black;
height: 300px;
width: 600px;
margin-left: 450px;
margin-top: 50px;
border-radius: 10px;
background-color: rgba(107, 106, 106, 0.603);

box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
backdrop-filter: blur(20px);

div{
    width: 50%;
    img{
        width: 200px;
        height:300px;
    }
    h2{
        margin-top: 100px;
        color: white;
    }
}
}
`