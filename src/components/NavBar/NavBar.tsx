import { Box } from '@mui/material';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro'

const NavBarContainer = styled(Box)`
 background-color: #0c2975;
 padding: 16px;
 width: 200px;
 display: flex;
 flex-direction: column;
 align-items: center;

 & .navbar_img_link {
  margin-bottom: 80px;
   margin-top: 40px;
    color: '';
 }

 & .navbar__link{
   color: #fff;
   cursor: pointer;
   text-decoration: none;
   margin-bottom: 16px; 
 }

 & .navbar__link:hover{
      text-decoration: underline
 }

 & .navbar__link--active{
   color: #0c2975;
   background: #fff;
   text-decoration: underline;
   margin-bottom: 16px; 
   border-radius: 40px;
   border: 1px dotted black;
    padding-left: 10px;
    padding-right: 10px;
 
 }
`

type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  const location = useLocation();
  return (
    <NavBarContainer
      component="aside"
    >
      <NavLink
        to="/"
        className={'navbar_img_link'}
      >
        <img src="/surelogo.svg" alt="logo"></img>
      </NavLink>
      {links.map(({ text, href, 'data-testid': dataTestId }) => {
        const isPathActive = !!matchPath(
          location.pathname,
          href
        )
        console.log(isPathActive)
        return (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"}
            data-testid={dataTestId}
            aria-current={isPathActive ? 'page' : undefined}
          >
            {text}
          </NavLink>

        )

      })
      }
    </NavBarContainer >
  );
}

export default NavBar;
