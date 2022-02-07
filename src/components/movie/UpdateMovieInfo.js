import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const UpdateMovieInfo = (props) => {
    console.log("getMovieName  " + props.id);
    const [getMovieName, setMovieName] = useState(props.movieName);
    const [getReleaseYear, setReleaseYear] = useState(props.releaseYear);
    const [getdesc, setdesc] = useState(props.description);
    const [getPoster, setPoster] = useState(props.posterPath);
    const history = useHistory();
    const onChangeMovieName = (e) => {
        setMovieName(e.target.value);
    }
    const onChangeReleaseYear = (e) => {
        setReleaseYear(e.target.value);
    }
    const onChangeDesc = (e) => {
        setdesc(e.target.value);
    }
    const onChangeUrl = (e) => {
        setPoster(e.target.value);
    }
    const reset = () => {
        setMovieName("");
        setReleaseYear("");
        setdesc("");
        setPoster("");
        history.goBack();

    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const movie = {
            movieName: getMovieName,
            releaseYear: getReleaseYear,
            desc: getdesc,
            poster: getPoster
        };
        axios
            .post(
                "http://localhost:8000/index.php/update/?id=" + props.id,
                JSON.stringify(movie),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(({data, status}) => {
                console.log(status)
                if (status === 201) {
                    toast.success("Movie updated successfully", {
                        position: "bottom-right",
                        closeOnClick: true
                    });
                    toast.configure();
                    reset();
                }
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
                          onChange={onChangeDesc}>{getdesc}</textarea>

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