import React from 'react';
import styled from 'styled-components';

const HelpSupport = () => {
  return (
    <Div1>
    <h1>HelpSupport</h1>
    <DivSuperContainer>
    
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>
    <Div2><iframe width="300" height="200" src="https://www.youtube.com/embed/lNMSqxQtO0w?si=tkOxOPWgWx4pG1y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Div2>

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0px 0px 35px ;
  border-radius:4px;
  width: 95%;
  overflow: hidden;
  height: auto;
  padding-bottom:20px;
@media only screen and (max-width: 768px) {
  width: 90%;
}`;


const Div2 = styled.div`
  margin: 40px 0px 0px 40px ;
  border: 1px solid #8080808f;
  border-radius:4px;
  width: 300px;
  overflow: hidden;
  height: 200px;
  @media only screen and (max-width: 768px) {
  width: 250px;
  overflow: hidden;
  height: 150px;}`;




export default HelpSupport;