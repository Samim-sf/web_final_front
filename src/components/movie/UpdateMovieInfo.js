import React, {useState} from 'react';
import {Form} from 'react-bootstrap'

const GetMovieInfo = ({ movieName, releaseYear, desc}) => {
    const [getMovieName, setMovieName] = useState(movieName);
    const [getReleaseYear, setReleaseYear] = useState(releaseYear);
    const [getdesc, setdesc] = useState(desc);

    const onChangeMovieName = (e) => {
        setMovieName(e.target.value);
    }
    const onChangeReleaseYear = (e) => {
        setReleaseYear(e.target.value);
    }
    const onChangeDesc = (e) => {
        setReleaseYear(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const movie = {
            movieName:getMovieName,
            releaseYear:getReleaseYear,
            desc:getdesc
        }
    }
    return (
        <div className="w-50 justify-content-center d-flex p-3  mt-1">
            <form action="" className="d-flex flex-column w-75 " onSubmit={handleSubmit}>
                {/*Movie name*/}
                <label htmlFor="movie-name" className="text-white m-2 mb-0 mt-2 p-1 pt-0">Movie name:</label>
                <input type="text" id="movie-name" name="movieName" placeholder="ex: fast and furious" required
                       className="m-2 p-2  input-border gradient-background " value={getMovieName} onChange={onChangeMovieName}/>

                {/*Release Year*/}
                <label htmlFor="release-year" className="text-white m-2 mb-0 mt-4 p-1 pt-0">Release year:</label>
                <input type="number" id="release-year" min="1" max="9999" name="releaseYear" placeholder="ex:1978"
                       required className="m-2  p-2 input-border gradient-background" value={getReleaseYear} onChange={onChangeReleaseYear}/>

                {/*Description*/}
                <label htmlFor="movie-summary" className="text-white m-2 mb-0 mt-4 p-1 pt-0">Film synopsis:</label>
                <textarea name="description" id="movie-summary" cols="30" rows="10" placeholder="Summary of the movie"
                          required className="m-2 p-2 input-border gradient-background" onChange={onChangeDesc}>{`${desc}`}</textarea>

                {/*Poster*/}
                <Form.Group controlId="formFile" className="mb-3 input-border border-none  mt-3 mb-2 no-border ">
                    <Form.Label>Choose movie poster</Form.Label>
                    <Form.Control type="file" accept="image/*" className="input-border btn-danger no-border" required/>
                </Form.Group>

                {/*Submit button*/}
                <input type="submit" name="addMovie" className="btn btn-warning mt-3"/>
            </form>
        </div>

    );
}

export default GetMovieInfo;