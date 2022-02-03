import React from 'react';
import {Form} from 'react-bootstrap'
const AddNewMovie = () => {
    return (
        <div className="w-50 justify-content-center d-flex p-3">
            <form action="" className="d-flex flex-column w-75 form-border">
                <input type="text" name="movieName" placeholder="movie name" required className="m-2 p-2  input-border "/>
                <input type="number" name="releaseYear" placeholder="release year/ ex:1978" required className="m-2 p-2 input-border"/>
                <textarea name="description" id="" cols="30" rows="10" placeholder="Summary of the movie" required className="m-2 p-2 input-border"/>
                <Form.Group controlId="formFile" className="mb-3 input-border border-none  mt-3 mb-2 no-border ">
                    <Form.Label>Choose movie poster</Form.Label>
                    <Form.Control type="file"  accept="image/jpg" className="input-border btn-danger no-border" required/>
                </Form.Group>
                <input type="submit" name="addMovie" className="btn btn-warning mt-3"/>
            </form>
        </div>

    );
}

export default AddNewMovie;