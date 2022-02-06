import React, {useState} from 'react';
import {Form} from 'react-bootstrap'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {addMovie} from "../../services/movieService";
import axios from "axios";

const AddNewMovie = () => {
    const [getMovieName, setMovieName] = useState("");
    const [getReleaseYear, setReleaseYear] = useState();
    const [getdesc, setdesc] = useState("");
    // const [getPoster, setPoster] = useState();
    const [getUrl, setUrl] = useState();
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
        setUrl(e.target.value);
    }
    // const onChangePoster = (e) => {
    //     setPoster(e.target.files);
    //     let fileReader = new FileReader();
    //     fileReader.readAsDataURL(e.target.files[0]);
    //     fileReader.onload = (event) => {
    //         setPoster(event.target.result);
    //     }
    // }
    const reset = () => {
        setMovieName("");
        setReleaseYear("");
        setdesc("");
        // setPoster(null);
        setUrl("");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const movie = {
            movieName: getMovieName,
            releaseYear: getReleaseYear,
            desc: getdesc,
            poster: getUrl
        };
        // try {
        //     // const {status} = await addMovie(movie);
        //     console.log(JSON.stringify(movie));
        //     const {status}= await axios.post(`http://localhost:8000/index.php`,(movie))
        //     console.log(status);
        //     if (status === 200) {
        //         toast.success("کاربر با موفقیت ساخته شد.", {
        //             position: "top-right",
        //             closeOnClick: true
        //         });
        //         // reset();
        //     }
        // } catch (ex) {
        //     toast.error("مشکلی پیش آمده.", {
        //         position: "top-right",
        //         closeOnClick: true
        //     });
        //     console.log(ex);
        // }

        axios
            .post(
                "http://localhost:8000/index.php/create",
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
                toast.success("Movie created successfully", {
                    position: "bottom-right",
                    closeOnClick: true
                });
                toast.configure();
                // console.log(data);
                reset();
                // }
            })
            .catch(ex => {
                toast.error("Try again", {
                    position: "top-right",
                    closeOnClick: true
                });
                console.log(ex);
            });
    };


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
                          required className="m-2 p-2 input-border gradient-background" onChange={onChangeDesc}
                          value={getdesc}/>

                {/*/!*Poster*!/*/}
                {/*<Form.Group controlId="formFile" className="mb-3 input-border border-none  mt-3 mb-2 no-border ">*/}
                {/*    <Form.Label>Choose movie poster</Form.Label>*/}
                {/*    <Form.Control type="file" accept="image/*" className="input-border btn-danger no-border" onChange={onChangePoster} required/>*/}
                {/*</Form.Group>*/}

                {/*Url text*/}
                <label htmlFor="movie-name" className="text-white m-2 mb-0 mt-2 p-1 pt-0">Movie url:</label>
                <input type="url" id="url-text" name="url" placeholder="ex: " required
                       className="m-2 p-2  input-border gradient-background " value={getUrl}
                       onChange={onChangeUrl}/>

                {/*Submit button*/}
                <input type="submit" name="addMovie" className="btn btn-warning mt-3"/>
            </form>
        </div>

    );
}

export default AddNewMovie;