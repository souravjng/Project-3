import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import { useSelector } from 'react-redux';
import Googlemap from '../components/Map';
import LocationComponent from '../components/Locationcomponent';

const Home = () => {
  
  const BtnTheme=useSelector((state)=>state.themes.Buttoncolor);
  return (
    <Div1>
    <h1>Home</h1>
    <DivSuperContainer>
    <DivSuperContainerleft>
    <Googlemap/>
    <Buttondiv><LocationComponent/></Buttondiv>
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
  font-size: 50px;}
@media only screen and (max-width: 768px) {
h1{font-size: 30px;
     margin: 20px 0px 0px 50px ;}}
`;
const DivSuperContainer = styled.div`
  border: 1px solid #8080808f;
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  position: relative;
  width: 95%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 650px;
@media only screen and (max-width: 768px) {
width: 90%;}`;


const DivSuperContainerleft = styled.div`
flex:7;
overflow: hidden;
height: 648px;`;

const Buttondiv = styled.button`
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
background: none;
border: none;
position: absolute;
left: 10px;
bottom: 10px;
`;

const DivSuperContainerright = styled.div`
flex:3;
height: 650px;





`;


export default Home;