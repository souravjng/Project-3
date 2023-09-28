import styled from 'styled-components';
import React, { memo } from 'react';


const Navbtn = memo(({ text, icon,data }) => {
  
  return (
    <NavbarBtns>
    {data==='profile'?<IconDivv><img width={'35px'} height={'35px'}  src={icon} alt={text}></img></IconDivv>:<IconDiv>{icon}</IconDiv>}
      <HeadlineDiv>
        <h1>{text}</h1>
      </HeadlineDiv>
    </NavbarBtns>
  );
})

const NavbarBtns = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  border-radius:7px;
  height: 50px;
  margin: 1px 0px 0px 20px ;
  &:hover{
    background-color:  rgb(255 255 255 / 20%);
    color:white;
    cursor: pointer;
  }
img{
  flex-wrap: wrap;
  margin: 4px 0px 0px 7px;
  border-radius: 333px;
}
@media only screen and (max-width: 768px) {
  width: 95%;
  &:hover{background-color: rgb(255 255 255 / 0%);}}
`;

const IconDiv = styled.div`
  flex: 2;
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-size: 25px;
  margin: 0px 0px 0px 0px;
`;

const IconDivv = styled.div`
  margin: 4px 0px 0px -7px;
  flex: 2;
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 35px;
  border-radius:33px;
  height: 35px;
`;

const HeadlineDiv = styled.div` 
  flex: 7;
  margin: 0px 0px 0px 15px;
  display: flex;
  align-items: center;


h1{font-size:16px;
    font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight:400;}`;

export default Navbtn;
