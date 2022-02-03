import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';


const Header = () => {
    return (
      <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid className="d-flex justify-content-between">
                    <Navbar.Brand className="m-0 p-2 fw-bold">Movie information</Navbar.Brand>
                    <Nav className="p-0">
                        <Nav.Link className="m-2 text-white " >Home</Nav.Link>
                        <Nav.Link className="m-2 text-white" >Add movie</Nav.Link>
                    </Nav>
                    <form
                        className="form-inline justify-content-center"
                    >
                        <div className="input-group w-100">
                            <input type="text" className="w-50 p-2  form-control" placeholder="Search"/>
                            <div className="input-group-prepend">
                                <button type="submit" className="fa fa-search btn btn-primary"/>
                            </div>
                        </div>
                    </form>
                </Container>
            </Navbar>

      </div>

    );
}

export default Header;