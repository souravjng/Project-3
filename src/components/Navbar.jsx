import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink
import Navbtn from './Navbtn';
import {IoHomeSharp,IoSettingsOutline,IoMailOutline,IoAppsSharp,} from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { BsFillWalletFill } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdRecordVoiceOver } from 'react-icons/md';



const Navbar = () => {
  return (
    <DivContainer>
      <DivContainer1>
      <div><MdRecordVoiceOver/></div>
      <h1>VoiceBox</h1>
      </DivContainer1>
      <DivContainer2>
        <StyledNavLink to="/home" activeClassName="active">
          <Navbtn text="Home" icon={<IoHomeSharp />} />
        </StyledNavLink>
        <StyledNavLink to="/message" activeClassName="active">
          <Navbtn text="Message" icon={<IoMailOutline />} />
        </StyledNavLink>
        <StyledNavLink to="/wallet" activeClassName="active">
          <Navbtn text="Wallet" icon={<BsFillWalletFill />} />
        </StyledNavLink>
        <StyledNavLink to="/dashboard" activeClassName="active">
          <Navbtn text="Dashboard" icon={<IoAppsSharp />} />
        </StyledNavLink>
        <StyledNavLink to="/help-support" activeClassName="active">
          <Navbtn text="Help & Support" icon={<AiOutlineQuestionCircle />} />
        </StyledNavLink>
      </DivContainer2>
      <DivContainer3>
        <StyledNavLink to="/profile" activeClassName="active">
          <Navbtn text="Profile" icon={<CgProfile />} />
        </StyledNavLink>
        <StyledNavLink to="/settings" activeClassName="active">
          <Navbtn text="Settings" icon={<IoSettingsOutline />} />
        </StyledNavLink>
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
  background-image:linear-gradient(to right, #ff5733, #ffcc29);
  top: 0;
  left: 0;
  width: 3.9%;
  height: 100%;
  display: flex;
  overflow:hidden;
  flex-direction: column;
  transition: background-image 0.3s ease, width 0.3s ease;
&:hover {
  background-image:none;
  background-color: #fe5234 ;
  width: 20%;
}
`;


const DivContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: white;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight:400;
div{
  margin: 15px 0px 0px 13px;
  height: 40px;
  cursor: pointer;
  width: 40px;
  font-size: 40px;}
h1{ margin: 20px 0px 0px 20px;font-size: 35px;}



`;

const DivContainer2 = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;

const DivContainer3 = styled.div`
  border-top:1px solid white;
  padding-top: 1%;
  flex: 2;
`;

export default Navbar;

