import React from 'react';
import styled from 'styled-components';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

const Rewardcomp = (props) => {
  const { Subject, amount, date, method } = props;

  return (
    <>
<ParentDiv>
    <ParentDiv1>
        <TopLeftDiv>
          <BsFillChatRightTextFill style={{ color: 'black' }} />
        </TopLeftDiv>
        <TopRightDiv>
          <h1 style={{ fontSize: '17px', marginLeft: '10px' }}>{Subject}({method})</h1>
          <div><p>{amount}</p><AiFillPlusCircle style={{ margin: 'auto' }} /></div>
        </TopRightDiv>
    </ParentDiv1>
    <ParentDiv2>
        <BottomLeftDiv>
        <p>Date: {date}</p>
        </BottomLeftDiv>
        <BottomRightDiv>
        <p>Id : 18462329349</p>
        </BottomRightDiv>
    </ParentDiv2>
</ParentDiv>
      
    </>
  );
};

const ParentDiv = styled.div`
  border: 1px solid grey;
  display: flex;
  margin: 4px 10px 0px 10px;
  border-radius: 4px;
  flex-direction: column;
  height: 80px;
  cursor: pointer;
font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:400;
  background-color: #80808031;

  &:hover {
    background-color: #80808051;
  }
`;

const ParentDiv1 = styled.div`
display:flex;
flex-direction:row;
`;
const ParentDiv2 = styled.div`
margin: 12px 5px 0px 5px;
height: 25px;
display:flex;
flex-wrap: wrap;
overflow: hidden;
flex-direction:row;
`;


const TopLeftDiv = styled.div`
  flex: 1.5;
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const TopRightDiv = styled.div`
  flex: 8.5;
  display: flex;
  align-items: center;

  h1 {
    margin: 0px 0px 0px 0px;
  }
  div{
    margin: 0px 0px 0px 110px;
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 100px;
    color: #4caf50;
    font-size: 22px;
    p{margin:auto;}
  }
`;

const BottomLeftDiv = styled.div`
flex:5;
font-size: 15px;
color: gray;
p{margin:auto;}
`;

const BottomRightDiv = styled.div`
flex:5;
display: flex;
flex-direction: row;
font-size: 16px;
p{margin:0px 0px 0px 80px;}
`;

export default Rewardcomp;
