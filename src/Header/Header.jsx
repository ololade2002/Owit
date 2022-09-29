import './Header.css';
import logo from '../imga/logo.png';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import {HiOutlineX} from 'react-icons/hi';

const Header = () => {

    const [mobile,setMobile] = useState(false);

    return ( 
        <div className="navbar">
         <nav>
                <div className="left">
                <div className="title">
                    <img src={logo} alt="" />
                </div>
                
                <ul className={mobile ? 'nav-link-mobile': 'nav-link' } onClick={()=> setMobile(false)} >
                    <li><a href="#Why">Why Comrade</a></li>
                    <li><a href="#Service">Our Services</a></li>
                    <li><a href="#Blog">Blog</a></li>
                </ul>
                </div>
               
                <div className="login">
                <button className='btn btn1'>Login</button>
                    <button className='btn btn2'>Get Started</button>
                </div>

                             {/*MENU*/}
             <button className='menu' onClick={()=> setMobile(!mobile)} >
                {mobile ? <HiOutlineX/> :  <FaBars/> }
        
           </button>

            </nav>
      </div>
     );
}
 
export default Header;
