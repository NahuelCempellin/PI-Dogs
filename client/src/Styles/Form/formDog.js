import styled from 'styled-components';

export const ContForm= styled.div`
border: 1px solid black;
width: 70%;
height: 650px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 200px;
margin-top: 40px;
border: 2px solid black;
border-radius: 10px;
background-color: rgba(107, 106, 106, 0.603);

box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
backdrop-filter: blur(20px);


`

export const DivInt= styled.div`
display:flex;
margin-left: 250px;
margin-bottom: 10px;
p{
    color:white;

}

input{
    width: 100px;
    height: 30px;
}

`

export const FormButton= styled.button`
background-color: rgba(255,255,255,0.3);
backdrop-filter: blur(20px);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
width: 20%;
margin-right: 30px;
border: 1px solid black;
margin-bottom: 10px;
padding: 7px;
&: hover{
    background-color: rgba(5, 5, 5, 0.795);
    backdrop-filter: blur(20px);
    color: white;
}

`

export const DivTemps= styled.div`
display: flex;
margin-left: 250px;

`

export const SelectTemps= styled.select`
appearance: none;

width: 100px;
height: 30px;
margin-top: 10px;
margin-bottom: 10px;

select-styles: none;
padding: 5px;
&: hover{
    background-color: rgba(5, 5, 5, 0.795);
    backdrop-filter: blur(20px);
    color: white;
}



`

export const DogUl= styled.ul`

display: flex;
li{
    
    list-style: none;
    width: 90px;
    height: 20px;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(20px);
    
    
}
button{
 color: white;
 background-color: red;
 border: 1px solid black;       
}

`

export const UlCont= styled.ul`
display: flex;

`