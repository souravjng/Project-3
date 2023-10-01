import React, { useState } from 'react'; 
import styled from 'styled-components';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Notification = ({ Subject }) => {
  const theme = useSelector((state) => state.themes.Themecolor);
  const [isDetailsVisible, setDetailsVisible] = useState(false); 

  const showDetails = () => {
    setDetailsVisible(true); 
  };

  const hideDetails = () => {
    setDetailsVisible(false);
  };

  return (
    <>
      <DetailsDiv isVisible={isDetailsVisible} >
      <div id='cross' onClick={hideDetails} style={{ cursor: 'pointer' }}><FaTimes size={"50px"} color={'#cd0505'} /></div>

      <div id='title'><h1 style={{ fontSize: '30px'}} >Subject : {Subject}</h1></div>

      <div id='other'> <h1 style={{ fontSize: '30px'}} >Other details</h1></div>
      </DetailsDiv>

      <ParentDiv onClick={showDetails}>
        <LeftDiv>
          <BsFillChatRightTextFill style={{ color: 'black' }} />
        </LeftDiv>
        <RightDiv>
          <h1 style={{ fontSize: '17px', marginLeft: '10px' }}>{Subject}</h1>
        </RightDiv>
      </ParentDiv>
    </>
  );
};

const DetailsDiv = styled.div`
  width: 70%;
  position: absolute;
  background-color: #90caf9;
  z-index: 4;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  height: 550px;
  margin: -30px 0px 0px 150px;
  border: 1px solid white;
  flex-direction:column;
  border-radius: 4px;
  h1 {
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.bg};
  }


#cross{position:absolute;
   right:10px;
   font-size: 30px;
   top:10px;
 }
#title{
margin: 20px 0px 0px 8px;
width: 90%;

}
#other{
margin: 20px 0px 0px 8px;
border: 1px solid black;
border-radius: 7px;
width: 98%;
height: 470px;
}
`;

const ParentDiv = styled.div`
  border: 1px solid grey;
  display: flex;
  margin: 4px 10px 0px 10px;
  border-radius: 4px;
  flex-direction: row;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: #80808051;
  }
`;

const LeftDiv = styled.div`
  flex: 1.5;
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const RightDiv = styled.div`
  flex: 8.5;
  display: flex;
  align-items: center;
  background-color: #80808031;
  h1 {
    margin: 0px 0px 0px 0px;
  }
`;

export default Notification;
