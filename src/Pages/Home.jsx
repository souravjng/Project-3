import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const Home = () => {
  return (
    <Div1>
    <h1>Home</h1>
    <DivSuperContainer>
    <DivSuperContainerleft>

    </DivSuperContainerleft>
    <DivSuperContainerright>
    <Form/>
    </DivSuperContainerright>
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
`;
const DivSuperContainer = styled.div`
  border: 1px solid #8080808f;
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  display: flex;
  flex-direction: row;
  height: 650px;`;


const DivSuperContainerleft = styled.div`border-right:1px solid #80808061;
flex:7;
height: 650px;



`;

const DivSuperContainerright = styled.div`
flex:3;
height: 650px;





`;


export default Home;