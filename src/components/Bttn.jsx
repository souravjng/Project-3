import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Bttn = (props) => {
  const BtnTheme = useSelector((state) => state.themes.Buttoncolor);
  return (
    <Buttondiv type="submit" bg={BtnTheme[0].color} width={props.width} height={props.height} font={props.font}>
      {props.text}
    </Buttondiv>
  );
};

const Buttondiv = styled.button`
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  border-radius: 3px;
  font-size: ${(props) => props.font};
  outline: none;
  cursor: pointer;
  color: white;
  border: none;
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  margin: 5px 0px 0px 0px;
  height: ${(props) => props.height};
  &:active {
    background-color: ${(props) => props.bg};
    opacity: 0.8;
  }
`;

export default Bttn;
