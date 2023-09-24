import React, { useState } from 'react';
import styled from 'styled-components';
import {setThemeColor} from '../../store/ThemesSlice';
import { useDispatch,useSelector } from 'react-redux';

const ColorNames = [
  { name: 'Green', color: '#82ce32' },
  { name: 'Blue', color: '#1e88e5' },
  { name: 'Yellow', color: '#ffc107' },
  { name: 'Purple', color: '#7e57c2' },
  { name: 'Cyan', color: '#00bcd4' },
  { name: 'Pink', color: '#f06292' },
  { name: 'Olive', color: '#9e9d24' },
  { name: 'Red', color: '#d84315' },
  { name: 'Gray', color: '#9e9e9e' },
  { name: 'Lavender', color: '#ba68c8' }
];







const Themes = () => {
  const BtnTheme = useSelector((state) => state.themes.Buttoncolor);
  const theme = useSelector((state) => state.themes.Themecolor);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    dispatch(setThemeColor(option));
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DivContainer>
      <DivContainerleft>
        <DivContainerleftname>Theme color</DivContainerleftname>
      </DivContainerleft>
      <DivContainermid></DivContainermid>
      <DivContainerbox>
        <div style={{ backgroundColor: selectedOption?.color || theme[0]?.color }}></div> 
      </DivContainerbox>
      <DivContainerright>
        <DropdownContainer>
          <DropdownButton onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: BtnTheme[0]?.color }}>
            {selectedOption?.name || theme[0]?.name}
          </DropdownButton>
          <DropdownList isOpen={isOpen}>
            {ColorNames.map((option, index) => (
              <DropdownListItem key={index} onClick={() => handleOptionClick(option)}>
                {option.name}
              </DropdownListItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </DivContainerright>
    </DivContainer>
  );
};



const DivContainer = styled.div`
  border-bottom: 1px solid #8080808f;
  background-color: white;
  margin: 5px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
`;

const DivContainerleft = styled.div`
  flex: 2;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const DivContainerleftname = styled.div`
  font-size: 20px;
  margin: auto;
  color: grey;
  font-family: 'Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
@media only screen and (max-width: 768px) {font-size: 14px;}
`;

const DivContainermid = styled.div`
  flex: 6;
  height: 70px;
 @media only screen and (max-width: 768px) {flex:2;}
`;

const DivContainerbox = styled.div`
  flex: 0.5;
  height: 70px;
  display: flex;
  justify-content: center;
  div {
    width: 25px;
    height: 25px;
    border-radius: 4px;
    margin: auto;
    background-color: #82ce32;
  }
@media only screen and (max-width: 768px) {
  div{width: 15px;
    height: 15px;}
}

`;

const DivContainerright = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  height: 70px;
`;

const DropdownContainer = styled.div`
  position: relative;
  margin: auto;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  width: 140px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {width:80px;}

`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  width: 139px;
  z-index: 100;
  text-align: center;
  left: 0;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 200;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  
  @media only screen and (max-width: 768px) {width:78px;}
`;

const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;


export default Themes;
