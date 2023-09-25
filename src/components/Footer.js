import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import styled from  'styled-components';

const Logo = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: rgb(133, 76, 230);
`;
const SubHead = styled.h1`
  color: white;
  font-size: 18px;
`
const Copyright = styled.div`
margin-top: 1.5rem;
font-size: 16px;
color: white;
text-align: center;
`;

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5">
        <Row className="">
          <Col size={12} sm={4}>
            <Logo>Chewang Gyalpu Bhutia</Logo>
          </Col>
          <Col size={12} sm={2}>
            <SubHead>Contact</SubHead>
            <p>chewang.g.b@gmail.com</p>
          </Col>
          <Col size={12} sm={3}>
            <SubHead>Address</SubHead>
            <p>Sikkim, Gangtok, 5th Mile, 737102</p>
          </Col>
          <Col size={12} sm={3} className="text-center">
            <SubHead>Follow </SubHead>
            <div className="social-icon">
              <a href="/"><img src={navIcon1} alt="Icon" /></a>
              <a href="/"><img src={navIcon2} alt="Icon" /></a>
              <a href="/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        <Copyright>
          &copy; 2023 Chewang Gyalpu Bhutia. All rights reserved.
        </Copyright>
      </Container>
    </footer>
  )
}
