import React, {useState, Fragment} from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AlertModal from "../common/AlertModal";
import UpdateMovieInfo from "./UpdateMovieInfo";
import MovieInformation from "./MovieInformation";
import {useHistory} from "react-router-dom";

const MovieCardAsGrid = ({id, movieName, releaseYear, desc, posterUrl}) => {
    const [isShownDeleteModal, setIsShownDeleteModal] = useState(false);
    const [isShownInfoModal, setIsShownInfoModal] = useState(false);
    const [getId, setId] = useState(id);
    const history = useHistory();
    let deleteModal = null;
    let infoModal = null;
    let editPage = null;
    const deleteHandle = () => {
        setIsShownDeleteModal(!isShownDeleteModal);
    }
    const editHandle = () => {
        history.push("/edit-movie/"+id);
        // editPage = <UpdateMovieInfo id={id}/>
    }
    const infoHandle = () => {
        setIsShownInfoModal(true);
    }

    if (isShownDeleteModal) {
        deleteModal =
            <AlertModal title="Warning" desc="Delete this movie?" isShow={isShownDeleteModal} isShown={deleteHandle}/>;
    }
    return (
        <Fragment>
            {deleteModal}
            <MovieInformation  movieName={movieName} releaseYear={releaseYear}
                              description={desc} imageUrl={posterUrl} isShown={isShownInfoModal}
                              onHide={() => setIsShownInfoModal(false)}/>
            <Card sx={{maxWidth: 345}} className="m-5 border-radius">
                <CardMedia
                    component="img"
                    height="194"
                    // image={`${posterUrl}`}
                    image={posterUrl}
                    alt="Paella dish"
                    onClick={infoHandle}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <h2>
                            {movieName}
                        </h2>
                        <br/>
                        <h2>Release year: {releaseYear}</h2>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="delete movie" onClick={deleteHandle}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={editHandle}>
                        <EditIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default MovieCardAsGrid;


