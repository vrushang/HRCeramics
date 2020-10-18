
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,Collapse,NavItem, NavbarToggler, 
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem } from 'reactstrap';
// navlink add "<a>" tag to link 
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
  
  constructor(props){
    super(props);
   
    this.toggleNav =this.toggleNav.bind(this);



    this.state={
      isNavOpen : false,
    }
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

render() {
  return (
    <>
     <Navbar dark expand='md' className='navbarnav'>
       <div className="container">
         {/* navbar toggler add a button to navbar and this button will be shown on extra small 
         to small screen size. for medium size screen this button will be hidden */}
         <NavbarToggler onClick={this.toggleNav}/>
         <NavbarBrand className='mr-auto pr-5' >
             HRCeramics
           {/* <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante'/> */}
         </NavbarBrand>
{/* inorder to use this nav bar for small device we need to use collapse the screen 
so we use collapse from reactstrap  */}
         <Collapse isOpen={this.state.isNavOpen} navbar>
         <Nav Navbar>
           <NavItem>
           <NavLink className='nav-link nav-link1' to='/home'>
           Home
           </NavLink>
           </NavItem>

           <NavItem>
           <NavLink className='nav-link nav-link1' to='/about'>
             About
           </NavLink>
           </NavItem>

           {/* <NavItem> */}
           {/* <NavLink className='nav-link' to='/catagory1'>
             <span className='fa fa-list fa-lg'></span>catagory
           </NavLink>
           </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='nav-link nav-link1'>
              Categories
              </DropdownToggle>
              <DropdownMenu left  className='dropdownbg'>
                <DropdownItem>
                <NavLink className='nav-link nav-link1' to='/product1'>
                Show By Tiles Types
                </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink className='nav-link nav-link1' to='/product2'>
                Show By Tiles Size
                </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

           <NavItem>
           <NavLink className='nav-link nav-link1' to='/contact'>
             Contact
           </NavLink>
           </NavItem>

           <NavItem>
           <NavLink className='nav-link nav-link1' to='/shop'>
             Gallery
           </NavLink>
           </NavItem>

         </Nav>
         </Collapse>
       </div>
     </Navbar>
      
    </>
  );
}

}
export default NavBar;
