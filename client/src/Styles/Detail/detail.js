import styled from 'styled-components'

export const ContainerDiv= styled.div`
border: 2px solid black;
border-radius: 10px;
background-color: rgba(107, 106, 106, 0.603);
backdrop-filter: blur(20px);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
overflow: hidden;
color: white;
width: 90%;
height: 600px;
display:flex;
margin-top: 50px;
margin-left:100px;
`
export const ImgDiv= styled.div`

width: 50%;
height: 100%;
display: flex;
flex-direction: column;
img{
    margin-top: 50px;
    margin-left: 40px;
    width: 90%;
    height:70%;
    border: 2px solid black;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    

}
button{
    margin-top: 30px;
    width: 80px;
    height: 30px;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(20px);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    border: 1px solid black;
}
`

export const DetailDiv= styled.div`
h1{
    margin-right: 10px;
    border: 1px solid black;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(20px);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

width:50%;
margin-top: 10px;
p{
    
    padding: 20px;
    
}

`