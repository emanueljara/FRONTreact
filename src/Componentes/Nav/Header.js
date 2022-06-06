import React from "react";
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'

import { Selector } from "../Buttons/Selector";
import {TogglearButton} from "../Buttons/togglearButton";

export function Header({selecTypeSearch,setSelecTypeSearch}) {
  return(
    <React.Fragment>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand href="http://localhost:3001/">Invernadero</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              <Nav className="me-auto">
                <div>
                  <TogglearButton
                    selecTypeSearch={selecTypeSearch}
                    setSelecTypeSearch={setSelecTypeSearch}
                  />
                </div>
                <div className="ml-3">
                  <Selector
                    selecTypeSearch={selecTypeSearch}
                  />
                </div>
              </Nav>
              
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  disabled={
                    (selecTypeSearch === '3' || selecTypeSearch === '4') ? false: true
                  }
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}