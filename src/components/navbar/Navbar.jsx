import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import trollFaceImage from "../../assets/images/trollFace.svg";
import Row from "react-bootstrap/Row";
import Bootstrap2Toggle from "react-bootstrap-toggle";

const MainNavbar = ({ darkMode, handleModeChange }) => {
  return (
    <header>
      <Navbar bg={darkMode ? "dark" : "primary"} variant="dark">
        <Container>
          <Row>
            <Navbar.Brand className="justify-content-center align-items-center">
              <img
                src={trollFaceImage}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />{" "}
              <p>Meme Generator</p>
              <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
              <label class="switch" htmlFor="mode">
                <input
                  type="checkbox"
                  id="mode"
                  checked={darkMode}
                  onChange={handleModeChange}
                  name="mode"
                />
                <span class="slider round"></span>
              </label>
            </Navbar.Brand>
          </Row>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Made by{"  "}
              <a href="https://zoran-janjic.netlify.app/" target="_blank">
                Zoran Janjic
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavbar;
