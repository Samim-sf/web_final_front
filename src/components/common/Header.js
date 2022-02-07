import React, {useRef, useState} from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink, useHistory} from "react-router-dom";
import {ButtonGroup, ToggleButton} from "@mui/material";

const Header = ({changeModel}) => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const searchValue = useRef(null);
    const history = useHistory();
    const radios = [
        {name: 'Grid', value: '1'},
        {name: 'List', value: '2'},
    ];
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchValue.current.value !== "" && searchValue.current.value !== " ") {
            history.push("/search-movie/" + searchValue.current.value);
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid className="d-flex justify-content-between ">
                    <Navbar.Brand className="m-0 p-2 fw-bold ">Movie information</Navbar.Brand>
                    <Nav className="p-0  justify-content-center">
                        <NavLink className="m-2  nav-link" to="/" exact
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Movie
                            List</NavLink>
                        <NavLink className="m-2  nav-link" to="/add-movie"
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Add
                            movie</NavLink>
                        <NavLink className="m-2  nav-link" to="/edit-movie" onClick={e => e.preventDefault()}
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Edit movie
                            info</NavLink>
                        <NavLink className="m-2  nav-link" to="/search-movie" onClick={e => e.preventDefault()}
                                 activeClassName="active" activeStyle={{color: "black", background: "white"}}>Search
                            result
                        </NavLink>
                    </Nav>

                    {/*Search box*/}
                    <form
                        className="form-inline justify-content-center"
                        onSubmit={handleSearch}

                    >
                        <div className="input-group w-100">
                            <input type="text" className="w-50 p-2  form-control" placeholder="Search"
                                   ref={searchValue}/>
                            <button type="submit" className="fa fa-search btn btn-primary"/>
                        </div>
                    </form>
                </Container>
            </Navbar>

            <div className="d-flex">
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            className="text-white bg-info"
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={() => {
                                changeModel(idx % 2 === 0)
                            }}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Header;