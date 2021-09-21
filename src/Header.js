import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from './assets/11.svg';

function Header(){
    return(
    <div>
         
         <nav className="navbar navbar-expand-md  navbar-dark">

            <NavLink exact to="/" className="nav-item p-3" >
                <img src={logo} className='logo' />
            </NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse " id="collapsibleNavbar" >
                  <ul className="navbar-nav m-auto">
                      
                        <li className="nav-item ">
                        <NavLink exact to="/mytasks" className="nav-item  p-3" >Mytasks</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/createtask" className="nav-item p-3" >create a task</NavLink>
                        </li>
                        
                       
                        <button className='btn btn-warning log '>
                            <NavLink exact to="/Register" className="nav-item p-3" >Login/Register</NavLink>
                        </button>
                  </ul>
            </div>
         </nav>
     </div>
    );
}

export default Header;