import React from 'react';
import styled from 'styled-components';



const Error = () => {
  return (
    <Div1>
    <h1>Error</h1>
  

    </Div1>
  )
}

const Div1 = styled.div`
  margin-left:3.4%;
  margin-top:-8px;
  background-color:white;
  width: 100%;
  height: 750px;
h1{
  font-size: 50px;
}
@media only screen and (max-width: 768px) {
  margin: 30px 0px 0px -45px;
  width: 113%;
  border: 1px solid black;

h1{
  text-align: center;
  margin-top: 200px;
  align-items: center;
  justify-content: center;
}
}
`;



export default Error;