import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Noticomp from '../components/Noticomp';
import Rewardcomp from '../components/Rewardcomp';
import { Formik, Form, Field,} from 'formik';


const Wallet = () => {
const theme = useSelector((state) => state.themes.Themecolor);
const NotificationData = useSelector((state) => state.Notification.Submissions);
const RewardData = useSelector((state) => state.Notification.Reward);
  return (
    <Div1>
    <h1>Wallet</h1>
    <DivSuperContainer>
    <Divleft><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Total Number of Submissions</h1></Divheadline><Divothers><Count><h1>{NotificationData.length}</h1></Count>{NotificationData.map((curr) =><Noticomp title={curr.title} {...curr} />)}</Divothers></Divleft>
    <Divmid><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Rewards Achieved So Far</h1></Divheadline><Divothers><Count><h1>{RewardData.length}</h1></Count>{RewardData.map((curr) =>(<Rewardcomp Subject={curr.Subject} amount={curr.amount} method={curr.method} date={curr.date} />))} </Divothers></Divmid>                                          
    <Divright><Divheadline style={{ backgroundColor: theme[0].color }}><h1>Payment Options</h1></Divheadline><Divothers style={{ overflow: 'hidden', position: 'relative' }}><Formik initialValues={{ UPI: '' }} onSubmit={(values) => {console.log(values);}}><Form><Fieldd autoComplete="off" type="text" name="UPI" id="UPI" placeholder="Enter your UPI ID Here"/><SaveButton>Save</SaveButton></Form></Formik></Divothers></Divright>

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
overflow: hidden;
display: flex;
justify-content: center;
width:100%;
text-align: center;
flex:1;
border:1px solid black;
h1{font-size: 30px; margin:auto;}`;


const Divothers = styled.div`
display: flex;
flex: 9;
flex-direction: column;
overflow-y: scroll;
padding: 0px 0px 10px 0px ;

border:1px solid #80808061;
`;

const Count = styled.div`
width: 100%;
justify-content: center;
text-align: center;
border-bottom:1px solid #80808061;
h1{
  margin: 0px 0px 0px 0px ;
  color: grey;
  font-size: 150px;}`;

const SaveButton = styled.button`
  background-color: #3498db;
  color: white;
  position:absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border: none;
  width: 140px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {width:80px;}
`;

const Fieldd = styled(Field)`
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  border-radius: 3px;
  font-size: 17px;
  border: 1px solid gray;
  outline: none;
  padding: 0px 5px 0px 5px;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 20px;
  margin: auto;
  display: flex;
  width: 90%;
  height: 50px;
`;





















export default Wallet;