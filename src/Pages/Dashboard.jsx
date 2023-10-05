import React from 'react';
import styled from 'styled-components';
import Linegraph from '../components/Linegraph';
import Graph from '../components/Graph';
import ShapePieChart from '../components/ShapePieChart';
import Piechartcom from '../components/Piechartcom';
import Graphcomp from '../components/Graphcomp';

const Dashboard = () => {
  return (
    <Div1>
    <h1>Dashboard</h1>
    <DivSuperContainer>
      <DivSuperContainerleft>

         <Divtop><Linegraph/></Divtop>
         <Divbottom><div><ShapePieChart/></div><div><Piechartcom/></div><div><Graphcomp/></div>  </Divbottom>

      </DivSuperContainerleft>
      <DivSuperContainerright>
         
         <Divright><Graph/></Divright>
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
@media only screen and (max-width: 768px) {
  h1{font-size: 30px;
     margin: 20px 0px 0px 50px ;}}
`;
const DivSuperContainer = styled.div`
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  display: flex;
  background: white;
  flex-direction:row;
  overflow: hidden;
  height: 650px;
@media only screen and (max-width: 768px) {
  width: 90%;
  display: none;
}`;
const DivSuperContainerleft = styled.div`
flex:6;
display: flex;
flex-direction: column;
padding: 5px 0px 5px 5px;
border-radius:4px;
overflow: hidden;
height: 640px;`;

const DivSuperContainerright = styled.div`
flex:4;
border-radius:4px;
padding: 5px 5px 5px 5px;
overflow: hidden;
height: 635px;`;



const Divtop = styled.div`
  background-image: linear-gradient(80deg, #e0c3fc 0%, #8ec5fc 100%);
    margin: 0px 0px 5px 0px ;
  border-radius:4px;
  width: 100%;
  overflow: hidden;
  flex:6;`;

  const Divbottom = styled.div`
  background-image: linear-gradient(80deg, #e0c3fc 0%, #8ec5fc 100%);
  margin: 0px 0px 0px 0px ;
  border-radius:4px;
  overflow: hidden;
  flex:4;
  display: flex;
  flex-direction: row;
  width: 100%;
  div{
    flex: 1;
    width: 100px;
    border: 1px solid white;

  }`;

  const Divright = styled.div`
  background-image: linear-gradient(240deg, #e0c9fc 0%, #8ec5fc 100%);
  margin: 0px 0px 5px 0px ;
  border-radius:4px;
  overflow: hidden;
  height: 650px;`;



export default Dashboard;