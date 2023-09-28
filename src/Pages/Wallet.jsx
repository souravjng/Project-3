import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wallet = () => {
  
  const theme = useSelector((state) => state.themes.Themecolor);
  return (
    <Div1>
    <h1>Wallet</h1>
    <DivSuperContainer>
    <Divleft><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Total Number of Submissions</h1></Divheadline><Divothers>  </Divothers></Divleft>
    <Divmid><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Latest Notifications of Rewards</h1></Divheadline><Divothers>  </Divothers></Divmid>
    <Divright><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Payment Options</h1></Divheadline><Divothers>  </Divothers></Divright>

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
  border: 1px solid #8080808f;
  background-color:white;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  overflow: hidden;
  height: 650px;
  display: flex;
  flex-direction: row;
@media only screen and (max-width: 768px) {
  width: 90%;
}`;


const Divleft = styled.div`
flex:1;
display:flex;
flex-direction:column;
`;
const Divmid = styled.div`
flex:1;
display:flex;
flex-direction:column;
`;
const Divright = styled.div`
flex:1;
display:flex;
flex-direction:column;
`;

const Divheadline = styled.div`
height: 60px;
display: flex;
justify-content: center;
width:100%;
text-align: center;
flex:1;
border:1px solid black;
h1{font-size: 30px; margin:auto;}`;


const Divothers = styled.div`
flex:9;
border:1px solid grey;`;


























export default Wallet;