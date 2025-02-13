import React, { useState } from "react";
import { data } from "../../restApi.json";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">FlavorFusion</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))} */}
            <a >Home</a>
            <a href='#about' >About us</a>
            <a href='#team'>Team</a>
            <a href='/mainpage' style={{marginRight:"20px"}}><button className="menuBtn">OUR MENU</button></a>
            
          </div>
          
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
