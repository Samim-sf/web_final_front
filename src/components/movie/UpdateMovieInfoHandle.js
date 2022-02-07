import React, { useEffect, useState} from "react";
import UpdateMovieInfo from "./UpdateMovieInfo";
import axios from "axios";

const UpdateMovieInfoHandle = (props) => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getSingleData();
    }, []);
    const getSingleData = async () => {
        await axios.get(
            'http://localhost:8000/index.php/read/?id=' + props.match.params.id
        )
            .then(response => {
                setData(response.data);
                setLoading(false);
            });

    }
    if (loading) return (" loading...");
    return (
        <UpdateMovieInfo id={getData[0].id} movieName={getData[0].movie_name} releaseYear={getData[0].release_year}
                         description={getData[0].description} posterPath={getData[0].poster_fileName}/>

    );
}
export default UpdateMovieInfoHandle;
