import React, { useState } from 'react'; 
import styled from 'styled-components';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const Notification = (props) => {
  const { title,about,subject,description,image1,image2,location,date,email,username  }=props;
  const [isDetailsVisible, setDetailsVisible] = useState(false); 

  const showDetails = () => {
    setDetailsVisible(true); 
  }
  const hideDetails = () => {
    setDetailsVisible(false);
  };

  return (
    <>
      <DetailsDiv isVisible={isDetailsVisible} >
      <div id='cross' onClick={hideDetails} style={{ cursor: 'pointer' }}><FaTimes size={"50px"} color={'#cd0505'} /></div>
       
      <div id='title'><h1 style={{ fontSize: '30px',margin:'10px 0px 0px 20px'}} >Title : {title}</h1></div>
      <Infodiv>
      <div id='other'> 
      <h1 style={{ fontSize: '20px'}} ><span>Subject : </span>{subject}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>About: </span>{about}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>Description : </span>{description}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>location : </span> {location}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>Date : </span>{date}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>Username : </span>{username}</h1>
      <h1 style={{ fontSize: '20px'}} ><span>Email : </span>{email}</h1>
      </div>
      <div id='imagesdiv'><div  style={{ backgroundImage: `url(${image1})` }}></div><div style={{ backgroundImage: `url(${image2})` }}></div></div>
      </Infodiv>
      </DetailsDiv>

      <ParentDiv onClick={showDetails}>
        <LeftDiv>
          <BsFillChatRightTextFill style={{ color: 'black' }} />
        </LeftDiv>
        <RightDiv>
          <h1 style={{ fontSize: '17px', marginLeft: '10px' }}>{title}</h1>
        </RightDiv>
      </ParentDiv>
    </>
  );
};

const DetailsDiv = styled.div`
  width: 70%;
  position: absolute;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;  z-index: 4;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  height: 550px;
  margin: -30px 0px 0px 150px;
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
 }`;

const Infodiv = styled.div`
display: flex;
flex-direction:row;
#title{
margin: 20px 0px 0px 8px;
width: 90%;
}
#other{
margin: 20px 0px 0px 8px;
border-radius:4px;
width: 98%;
height: 470px;
h1{height:auto;margin:10px 0px 0px 15px;span{font-weight:bold;}}
}
#imagesdiv{
  margin: 20px 10px 0px 0px;
  width: 700px;
  height: 470px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  div{
   width: 350px;
   height: 220px;
   margin: auto;
   background-size: cover;
  }
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
