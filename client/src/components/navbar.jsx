import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar  variant="dark" sticky="top" expand="md">
            <Navbar.Brand>
            <Link to="/" className="navbar-brand">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link>
            <Link to="/usuarios" className="navbar-brand">Usuários</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/adicionar" className="navbar-brand">Adicionar</Link>
            </Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form> 
            </Navbar.Collapse>
        </Navbar> 
    )
}
export default NavBar

/**
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Anonymous Board</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/threads" className="nav-link">Board</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create New Thread</Link>
                        </li>
                    </ul>
                </div>
            </nav>*/