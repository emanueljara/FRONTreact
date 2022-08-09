import React from "react";
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'

import { SelecTypeSensors } from "../Buttons/SelecTypeSensors";
import {SelectTypeSearch} from "../Buttons/SelectTypeSearch";

export function Header({selecTypeSearch,setSelecTypeSearch,devices,setDevices}) {
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
                  <SelectTypeSearch
                    selecTypeSearch={selecTypeSearch}
                    setSelecTypeSearch={setSelecTypeSearch}
                  />
                </div>
                <div className="ml-3">
                  <SelecTypeSensors
                    selecTypeSearch={selecTypeSearch}
                    devices={devices}
                    setDevices={setDevices}
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
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}