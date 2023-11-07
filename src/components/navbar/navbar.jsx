import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link} from 'react-scroll'

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="black"
        className="p-1 font-normal"
      >
          <Link activeClass="active" class="cursor-pointer" to="About" spy={true} smooth={true} offset={50} duration={500} >
          Nosotros
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
         <Link activeClass="active" class="cursor-pointer" to="Proyect" spy={true} smooth={true} offset={50} duration={500} >
          Proyecto
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link activeClass="active" class="cursor-pointer" to="Team" spy={true} smooth={true} offset={50} duration={500} >
          Team
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link activeClass="active" class="cursor-pointer" to="Contact" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <div className="sticky top-0 w-screen  bg-white z-10 rounded-none py-2 px-4 lg:px-8 lg:py-4">
        
        <div className="flex items-center justify-between text-black-900">
        <span class=" items-baseline">
        
        
        <img class="self-center w-8 h-8 rounded-full mx-1"  src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/82db2d36-90a9-490d-4f1b-5714a4c23500/public" alt="image description" />
      </span>
       
        
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit   lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
    
        </MobileNav>
      </div>
    
    </>
  );
}