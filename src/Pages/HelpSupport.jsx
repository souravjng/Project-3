import React from 'react';
import styled from 'styled-components';


const HelpSupport = () => {
  return (
    <Div1>
    <h1>HelpSupport</h1>
    <DivSuperContainer>
    <h1>Contact me at - Souravjangra108@gmail.com</h1>
    </DivSuperContainer>
    </Div1>

  )
}

const Div1 = styled.div`
  margin-left:3.4%;
  margin-top:-8px;
  background-color:#e0e0e0;
  width: 97%;
  height: 755px;
h1{
  
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight:400;
  margin: 0px 0px 0px 50px ;
  font-size: 50px;
  
}
@media only screen and (max-width: 768px) {
  margin: -10px 0px 0px -45px;
  width: 118%;
  h1{font-size: 30px;
     margin: 20px 0px 0px 50px ;}}
`;
const DivSuperContainer = styled.div`
  border: 1px solid #8080808f;
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  overflow: hidden;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
h1{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 50px;
  text-align: center;
  color: #bdbdbd;
  
@media only screen and (max-width: 768px) {margin:-350px 0px 0px -20px; font-size:25px;}
}
@media only screen and (max-width: 768px) {
  width: 90%;
  height: 100vh;
}`;



export default HelpSupport;