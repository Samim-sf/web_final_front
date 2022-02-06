import React, {useEffect, useState} from "react";
import UpdateMovieInfo from "./UpdateMovieInfo";

const UpdateMovieInfoHandle = (props) => {
    const [getId, setId] = useState(props.match.params.id);
    const [getMovieName, setMovieName] = useState();
    const [getReleaseYear, setReleaseYear] = useState();
    const [getdesc, setdesc] = useState();
    const [getPoster, setPoster] = useState();
    const [getData, setData] = useState([]);
    useEffect(() => {
        console.log("hello")
        getSingleData()
    }, []);

    const getSingleData = async () => {
        await fetch('http://localhost:8000/index.php/read/?id=' + props.match.params.id
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
                setData(myJson);
            });
        console.log("get data : ");
        console.log(getData);
        {
            getData.map(async (movie) => {
                await setMovieName(movie.movie_name);
                await setReleaseYear(movie.release_year);
                await setdesc(movie.description);
                await setPoster(movie.poster_fileName);
            })
        }
    }
    return (
        <UpdateMovieInfo id={getId} movieName={getMovieName} description={getdesc} posterPath={getPoster}/>
    );
}
export default UpdateMovieInfoHandle;