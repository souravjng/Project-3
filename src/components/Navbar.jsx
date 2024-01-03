import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbtn from './Navbtn';
import {IoHomeSharp,IoSettingsOutline,IoMailOutline,IoAppsSharp,} from 'react-icons/io5';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsFillWalletFill } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdRecordVoiceOver } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { logout,user, isAuthenticated, } = useAuth0();
  const theme=useSelector((state)=>state.themes.Themecolor);
  const shownavbar = () => {
  const fatherContainer = document.getElementById("fathercontainer");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    const currentHeight = fatherContainer.style.height;
    fatherContainer.style.height = currentHeight === '100vh' ? '60px' : '100vh';
  }
};
  return (
    <DivContainer id='fathercontainer' style={{ backgroundColor: theme[0].color }} >
      <DivContainer1>
      <div className='logo'><MdRecordVoiceOver/></div>
      <h1>VoiceBox</h1>
      <div onClick={()=>shownavbar()} className='menu'><IoMenu /></div>
      </DivContainer1>
      <DivContainer2>
        <StyledNavLink onClick={()=>shownavbar()} to="/home" activeClassName="active">
          <Navbtn  text="Home" icon={<IoHomeSharp className='icon' />} />
        </StyledNavLink>
        <StyledNavLink onClick={()=>shownavbar()} to="/message" activeClassName="active">
          <Navbtn  text="Message" icon={<IoMailOutline className='icon' />} />
        </StyledNavLink>
        <StyledNavLink onClick={()=>shownavbar()} to="/wallet" activeClassName="active">
          <Navbtn  text="Wallet" icon={<BsFillWalletFill className='icon' />} />
        </StyledNavLink>
        <StyledNavLink onClick={()=>shownavbar()} to="/dashboard" activeClassName="active">
          <Navbtn  text="Dashboard" icon={<IoAppsSharp className='icon' />} />
        </StyledNavLink>
        <StyledNavLink onClick={()=>shownavbar()} to="/help-support" activeClassName="active">
          <Navbtn  text="Help & Support" icon={<AiOutlineQuestionCircle className='icon' />} />
        </StyledNavLink>
      </DivContainer2>
      <DivContainer3>
        { isAuthenticated  && ( <Navbtn  data='profile' text={user.name} icon={user.picture} />)}
        <StyledNavLink onClick={()=>shownavbar()} to="/settings" activeClassName="active">
          <Navbtn text="Settings" icon={<IoSettingsOutline className='icon' />} />
        </StyledNavLink>
        {   isAuthenticated  && ( <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><Navbtn  text="Logout" icon={<BiLogOutCircle className='icon' />} /></div>)}
      </DivContainer3>
    </DivContainer>
  );
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit; 
`;

const DivContainer = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  display: flex;
  overflow:hidden;
  flex-direction: column;
  transition: background-image 0.3s ease, width 0.3s ease;
&:hover {width: 20%;}
@media only screen and (max-width: 768px) {
  width: 100%;
  height: 60px;
  .icon{font-size:32px;}
  &:hover {width: 100%;}
}`;


const DivContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: white;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight:400;
.menu{display:none;}
.logo{font-size:45px;}
div{
  margin: 15px 0px 0px 13px;
  height: 40px;
  cursor: pointer;
  width: 40px;
  font-size: 40px;}
h1{ margin: 20px 0px 0px 20px;font-size: 35px;}
@media only screen and (max-width: 768px) {
  .menu{display:inline-block;
  z-index:3;
  position:absolute;
  right:30px;
  top:-13px;
  font-size:60px;}
  .logo{font-size:55px;margin:5px 0px 10px 0px;}
  margin:0px 0px 0px 10px;
  h1{display:none;}}
`;

const DivContainer2 = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
@media only screen and (max-width: 768px) {
  margin: auto;
  width: 270px;
  div{margin-top:30px;}
  h1{font-size:22px;}}
`;

const DivContainer3 = styled.div`
  border-top:1px solid white;
  padding-top: 1%;
  flex: 2;
  @media only screen and (max-width: 768px) {
  margin: auto;
  width: 270px;
  h1{font-size:22px;}}
`;

export default Navbar;

