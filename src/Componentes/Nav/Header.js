import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import {Dispositivo} from "../../Components/Dispositivo/Dispositivo";
  import {Sensor} from "../../Components/Sensores/Sensor";
  import {Medicion} from "../../Components/Mediciones/Medicion";

export function Header() {
    return(
        <Router>

            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Invernadero</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/Dispositivos"}>Dispositivos</Nav.Link>
                                <Nav.Link as={Link} to={"/Sensores"}>Sensores</Nav.Link>
                                <Nav.Link as={Link} to={"/Mediciones"}>Mediciones</Nav.Link>
                                <NavDropdown title="Mediciones" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/Sensores"}>Obtener Todas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Obtener una</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
            <Routes>
                <Route exact path="/Dispositivos" element={<Dispositivo/>}/>
                <Route exact path="/Sensores" element={<Sensor/>}/>
                <Route exact path="/Mediciones" element={<Medicion/>}/>
                
            </Routes>
            </div>
        </Router>
    );
}