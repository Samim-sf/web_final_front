import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container fluid className="d-flex justify-content-between">
                    <Navbar.Brand className="m-0 p-2 fw-bold">Movie information</Navbar.Brand>
                    <Nav className="p-0">
                        <NavLink className="m-2  nav-link" to="/" exact
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Movie
                            List</NavLink>
                        <NavLink className="m-2  nav-link" to="/add-movie"
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Add
                            movie</NavLink>
                        <NavLink className="m-2  nav-link" to="/edit-movie"  onClick={e=>e.preventDefault()}
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Edit movie info</NavLink>
                    </Nav>
                    <form
                        className="form-inline justify-content-center"
                        onSubmit={event => event.preventDefault()}

                    >
                        <div className="input-group w-100">
                            <input type="text" className="w-50 p-2  form-control" placeholder="Search"/>
                            <button type="submit" className="fa fa-search btn btn-primary"/>
                        </div>
                    </form>
                </Container>
            </Navbar>

        </div>

    );
}

export default Header;