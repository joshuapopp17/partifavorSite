import { BrowserRouter as Router, Routes, Route, Link   } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Socials from './pages/Socials';
import NavigationBar from './components/Navigation/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import OrangeTitle from './assets/OrangeTitle.png'

function App() {
  return (
    <div>
    <Router>
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image style={{width: 150}} src={OrangeTitle}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/team'>Team</Nav.Link>
            <Nav.Link as={Link} to='/socials'>Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
