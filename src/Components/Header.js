import React from "react";
import logo from '../images/logo.png';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
        <NavLink to="/" className="text-xl text-blue-gray-800 hover:text-blue-600">
          Home
        </NavLink>
        <li/>
        <li>
        <NavLink to="/about" className="text-xl text-blue-gray-800 hover:text-blue-600">
          About
        </NavLink>
        </li>
      <Menu>
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal cursor-pointer"
          >
            <span className="flex items-center text-xl">Menu ▾</span>
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <NavLink to="/menu/nepali-food">Nepali Food</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/menu/indian-food">Indian Food</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/menu/chinese-food">Chinese Food</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal cursor-pointer"
          >
            <span className="flex items-center text-xl">More ▾</span>
          </Typography>
        </MenuHandler>
        <MenuList>
          
          <MenuItem>
            <NavLink to="/contact">Contact</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/gallery">Gallery</NavLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="fixed top-0 z-50 h-24 max-w-full bg-orange-50 rounded-none px-3 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            <div className="h-20 w-20 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="logo" className="h-full w-full object-contain" />
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block text-xl">
                <span>Log In</span>
              </Button>
              
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header