import React, {useState, Fragment, useEffect} from "react";
import MovieCardAsGrid from "./MovieCardAsGrid";
import axios from "axios";


const SearchMovieCardsGrid = (props) => {
    const [isDeleted,setIsDeleted] = useState(false);
    const [getData, setData] = useState([]);
    const [searched, setSearched] = useState(true);
    const deleteHandle=()=>{
        setIsDeleted(!isDeleted);
    }
    useEffect(() => {
        getSearchData()
    }, [props.match.params.text]);
    const getSearchData = async () => {
        await axios.get(
            'http://localhost:8000/index.php/search/?search=' + props.match.params.text
        )
            .then(response => {
                setData(response.data);
                setSearched(false);
            });

    }
    if (searched) return (" loading");
    return (
        <Fragment>
            {getData.map((movie, i) => (
                <MovieCardAsGrid
                    key={i}
                    id={movie.id}
                    movieName={movie.movieName}
                    releaseYear={movie.releaseYear}
                    desc={movie.description}
                    posterUrl={movie.posterPath}
                    isDeleted = {deleteHandle}
                />
            ))}
        </Fragment>
    );
}
export default SearchMovieCardsGrid;