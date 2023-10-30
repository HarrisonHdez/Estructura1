import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
`;
const NavContent = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
const NavLogo = styled.div``;
const NavLinks = styled.div``;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
`;
export const NavBar = () => {
  return (
    <Nav>
      <NavContent>
        <NavLogo>
          <span>LOGO</span>
        </NavLogo>

        <NavLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/acerca">Acerca</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};
