import React from 'react'
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';


class Main extends React.Component {
    render(){
        return (
                <div>
                <Navbar fixed="top"  expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Dembele Fabala</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/#contact" >Contact</Nav.Link>
                    <Nav.Link href="/#projets">Projets</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href='/CV.pdf' target="_blank">Mon CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }    
}

export default Main;