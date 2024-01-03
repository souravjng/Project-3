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
       
      <div id='title'><p >Title : {title}</p></div>
      <Infodiv>
      <div id='other'> 
      <h1 ><span>Subject : </span>{subject}</h1>
      <h1 ><span>About: </span>{about}</h1>
      <h1 ><span>Description : </span>{description}</h1>
      <h1 ><span>location : </span> {location}</h1>
      <h1 ><span>Date : </span>{date}</h1>
      <h1 ><span>Username : </span>{username}</h1>
      <h1 ><span>Email : </span>{email}</h1>
      </div>
      <div id='imagesdiv'><div  style={{ backgroundImage: `url(${image1})` }}></div><div style={{ backgroundImage: `url(${image2})` }}></div></div>
      </Infodiv>
      </DetailsDiv>

      <ParentDiv onClick={showDetails}>
        <LeftDiv>
          <BsFillChatRightTextFill style={{ color: '#f57f17' }} />
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
  border: 1px solid grey;
  z-index: 4;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  height: 550px;
  margin: -30px 0px 0px 150px;
  flex-direction:column;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    height: 1500px;
    margin: -98px 0px 0px 0px ;
  }
  h1 {
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.bg};}

#cross{position:absolute;
   right:10px;
   font-size: 30px;
   top:10px;
 }
 
#title{
width: 90%;
margin:10px 0px -30px 20px;
h1{
font-size: 20px;
}
@media only screen and (max-width: 768px) {
  font-size: 25px;
}
}`;

const Infodiv = styled.div`
display: flex;
flex-direction:row;
@media only screen and (max-width: 768px) {
  flex-direction: column;
}

#other{
margin: 20px 0px 0px 8px;
border-radius:4px;
width: 91%;
height: 470px;
h1{height:auto;margin:10px 0px 0px 15px;font-size:20px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  } span{font-weight:bold;}}
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
   @media only screen and (max-width: 768px) {
  margin-top: 10px;
}
  }
   @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
    margin: -60px 0px 0px 0px;
  }
}
`;

const ParentDiv = styled.div`
  border: 1px solid #e0e0e0;
  display: flex;
  margin: 4px 10px 0px 10px;
  border-radius: 4px;
  flex-direction: row;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: #80808051;
  }
  @media only screen and (max-width: 768px) {height:80px;}
`;

const LeftDiv = styled.div`
  flex: 1.5;
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
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
