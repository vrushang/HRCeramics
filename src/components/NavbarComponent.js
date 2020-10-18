// import React from "react";
// //import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// function NavBar(props)
//  {
//     //const location = useLocation();  

//     return (
//         <header class="header">
//             {/* {console.log(location.pathname)} */}
//             {/* <nav class={(location.pathname === "/home")? "navbar navbar-expand-lg  fixed-top py-2":"navbar navbar-expand-lg navbar1 fixed-top py-2"} > */}
//             <nav class="navbar navbar-expand-lg navbar1 fixed-top pb-3">
//                 <div class="container">
                    
//                     <a href="/home" class="navbar-brand font-weight-bold">
//                        HRCeramics
//                     </a>
                    
//                     <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                    
//                     <div id="navbarSupportedContent" class="collapse navbar-collapse">
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item active">
//                             <a href="/home" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a>
//                             </li>
//                             <li class="nav-item">
//                             <a href="/about" class="nav-link text-uppercase font-weight-bold">About</a>
//                             </li>
            
//                             <li class="nav-item dropdown">
//                                 <a class="nav-link dropdown-toggle text-uppercase font-weight-bold" href="#" id="navbardrop" data-toggle="dropdown">
//                                     Categories
//                                 </a>
//                                 <div class="dropdown-menu">
//                                     <li>
                                    
//                                          <a href="/product1" class="dropdown-item text-uppercase ">
//                                              Show By Tiles Types
//                                          </a> 
                                    
//                                     </li>
//                                   <li> 
                                    
//                                       <a href="/product2" class="dropdown-item text-uppercase " /* id="navbardrop" data-toggle="dropdown" */>
//                                             Show By Tiles Size
//                                       </a>  
                                    
//                                   </li>
//                                 </div>
//                             </li>

//                             <li class="nav-item">
//                             <a href="/shop" class="nav-link text-uppercase font-weight-bold">Gallery</a>
//                             </li>
//                             <li class="nav-item">
//                             <a href="/contact" class="nav-link text-uppercase font-weight-bold">Contact</a>
                            
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
//   }


// export default NavBar;




import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,Collapse,NavItem,Jumbotron, NavbarToggler, 
       Modal,Button,ModalHeader,ModalBody,
      Form,FormGroup,Input,Label,UncontrolledDropdown,
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
