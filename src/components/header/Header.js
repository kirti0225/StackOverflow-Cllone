import React from 'react';
import './header.css'; 
// import SearchIcon from '@mui/icons-material/Search';
 import {BiSearch, BiHelpCircle} from "react-icons/bi";
 import {GoInbox} from "react-icons/go";
 import {CgProfile} from "react-icons/cg";
 //import {Link} from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
         
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <BiSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <CgProfile style={ {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    fontSize:"30px",
    color: "gray"
  }}/>
            <GoInbox style={ {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    fontSize:"30px",
    color: "gray"
  }}/>
            <BiHelpCircle style={ {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    fontSize:"30px",
    color: "gray"
  }}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
