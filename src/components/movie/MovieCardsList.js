import React, {useState, Fragment, useEffect} from "react";
import MovieCardAsGrid from "./MovieCardAsGrid";
import {findRenderedComponentWithType} from "react-dom/test-utils";
import MovieCardAsList from "./MovieCardAsList";


const MovieCardsList = () => {
    const [fetchALl, setFetchAll] = useState([]);
    const [isDeleted,setIsDeleted] = useState(false);
    const deleteHandle=()=>{
        setIsDeleted(!isDeleted);
    }
    useEffect(() => {
        getData()
    }, [isDeleted]);
    const getData = async () => {
        await fetch('http://localhost:8000/index.php/read_all'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setFetchAll(myJson)
            });
    }

    return (
        <Fragment>
            {fetchALl.map((movie, i) => (
                <MovieCardAsList
                    key={i}
                    id={movie.id}
                    movieName={movie.movieName}
                    releaseYear={movie.releaseYear}
                    desc={movie.description}
                    posterUrl={movie.posterPath}
                    isDeleted = {deleteHandle}
                />
                // <MovieCardAsGrid
                // key={i}
                // id={movie.id}
                // movieName={movie.movie_name}
                // releaseYear={movie.release_year}
                // desc={movie.description}
                // posterUrl={movie.poster_fileName}
                // />
            ))}
        </Fragment>
    );
}
export default MovieCardsList;