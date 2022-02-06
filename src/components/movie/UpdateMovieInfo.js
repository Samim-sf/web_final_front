import React, {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap'
import axios from "axios";
import {toast} from "react-toastify";
import MovieCardAsGrid from "./MovieCardAsGrid";

const UpdateMovieInfo = (props,{id,movieName,releaseYear,description,posterPath}) => {
    const [getMovieName, setMovieName] = useState(movieName);
    const [getReleaseYear, setReleaseYear] = useState(releaseYear);
    const [getdesc, setdesc] = useState(description);
    const [getPoster, setPoster] = useState(posterPath);
    const [getData, setData] = useState([]);
    const [getTemp, setTemp] = useState(false);
    // console.log("id: " +props.match.id);
    // console.log(props.match.params.id);

    // useEffect(() => {
    //     console.log("hello")
    //     getSingleData()
    // }, []);
    //
    // const getSingleData = async () => {
    //     await fetch('http://localhost:8000/index.php/read/?id=' + props.match.params.id
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson);
    //         });
    //     console.log("get data : ");
    //     console.log(getData);
    //     {
    //         getData.map(async (movie) => {
    //             await setMovieName(movie.movie_name);
    //             await setReleaseYear(movie.release_year);
    //             await setdesc(movie.description);
    //             await setPoster(movie.poster_fileName);
    //         })
    //     }
    //
    //
    // }

    const onChangeMovieName = (e) => {
        setMovieName(e.target.value);
    }
    const onChangeReleaseYear = (e) => {
        setReleaseYear(e.target.value);
    }
    const onChangeDesc = (e) => {
        setReleaseYear(e.target.value);
    }
    const onChangeUrl = (e) => {
        setPoster(e.target.value);
    }
    const reset = () => {
        // setMovieName("");
        // setReleaseYear("");
        // setdesc("");
        // setPoster(null);

    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const movie = {
            // movieName: getMovieName,
            // releaseYear: getReleaseYear,
            // desc: getdesc,
            // poster: getUrl
        };
        axios
            .post(
                "http://localhost:8000/index.php/update",
                JSON.stringify(movie),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(({data, status}) => {
                // console.log(status)
                // if (status === 201) {
                toast.success("Movie updated successfully", {
                    position: "bottom-right",
                    closeOnClick: true
                });
                toast.configure();
                // console.log(data);
                reset();
                window.location = "localhost:3000";
                // }
            })
            .catch(ex => {
                toast.error("Try again", {
                    position: "top-right",
                    closeOnClick: true
                });
                console.log(ex);
            });
    }
    return (

        <div className="w-50 justify-content-center d-flex p-3  mt-1">
            {console.log(getMovieName)}
            {console.log(getReleaseYear)}
            {console.log(getdesc)}
            {console.log(getPoster)}
            <form action="" className="d-flex flex-column w-75 " onSubmit={handleSubmit}>
                {/*Movie name*/}
                <label htmlFor="movie-name" className="text-white m-2 mb-0 mt-2 p-1 pt-0">Movie name:</label>
                <input type="text" id="movie-name" name="movieName" placeholder="ex: fast and furious" required
                       className="m-2 p-2  input-border gradient-background " value={getMovieName}
                       onChange={onChangeMovieName}/>

                {/*Release Year*/}
                <label htmlFor="release-year" className="text-white m-2 mb-0 mt-4 p-1 pt-0">Release year:</label>
                <input type="number" id="release-year" min="1" max="9999" name="releaseYear" placeholder="ex:1978"
                       required className="m-2  p-2 input-border gradient-background" value={getReleaseYear}
                       onChange={onChangeReleaseYear}/>

                {/*Description*/}
                <label htmlFor="movie-summary" className="text-white m-2 mb-0 mt-4 p-1 pt-0">Film synopsis:</label>
                <textarea name="description" id="movie-summary" cols="30" rows="10" placeholder="Summary of the movie"
                          required className="m-2 p-2 input-border gradient-background"
                          onChange={onChangeDesc} value={getdesc}/>

                {/*/!*Poster*!/*/}
                {/*<Form.Group controlId="formFile" className="mb-3 input-border border-none  mt-3 mb-2 no-border ">*/}
                {/*    <Form.Label>Choose movie poster</Form.Label>*/}
                {/*    <Form.Control type="file" accept="image/*" className="input-border btn-danger no-border" onChange={onChangePoster} required/>*/}
                {/*</Form.Group>*/}

                {/*Url text*/}
                <label htmlFor="movie-name" className="text-white m-2 mb-0 mt-2 p-1 pt-0">Movie url:</label>
                <input type="url" id="url-text" name="url" placeholder="ex: " required
                       className="m-2 p-2  input-border gradient-background " value={getPoster}
                       onChange={onChangeUrl}/>

                {/*Submit button*/}
                <input type="submit" name="addMovie" className="btn btn-warning mt-3"/>
            </form>
        </div>

    );
}

export default UpdateMovieInfo;