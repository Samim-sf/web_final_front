import React, {useState, Fragment} from "react";
import AlertDeleteModal from "../common/AlertDeleteModal";
import MovieInformation from "./MovieInformation";
import {useHistory} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {CardActions} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const MovieCardAsList = ({id, movieName, releaseYear, desc, posterUrl, isDeleted}) => {
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
        history.push("/edit-movie/" + id);
    }
    const infoHandle = () => {
        setIsShownInfoModal(true);
    }

    if (isShownDeleteModal) {
        deleteModal =
            <AlertDeleteModal id={id} title="Warning" desc="Delete this movie?" isShow={isShownDeleteModal}
                              isShown={deleteHandle} isDeleted={isDeleted}/>;
    }
    return (
        <Fragment>
            {deleteModal}
            <MovieInformation movieName={movieName} releaseYear={releaseYear}
                              description={desc} imageUrl={posterUrl} isShown={isShownInfoModal}
                              onHide={() => setIsShownInfoModal(false)}/>

            <List sx={{minWidth: "550px", maxWidth: "700px", bgcolor: 'background.paper'}}
                  className="m-5 border-radius col-12 card-background-color ">
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{height: '100px', width: '100px'}} alt="Remy Sharp" src={posterUrl}
                                onClick={infoHandle} className="me-3" variant={"square"}/>
                    </ListItemAvatar>
                    <ListItemText
                        className="justify-content-center text-center"
                        primary={<h2>{movieName}</h2>}
                        secondary={<h5> Release year: {releaseYear}</h5>}
                    />
                </ListItem>
                <CardActions disableSpacing className="justify-content-end">
                    <IconButton aria-label="delete movie" onClick={deleteHandle}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={editHandle}>
                        <EditIcon/>
                    </IconButton>
                </CardActions>
            </List>
        </Fragment>
    );
}


export default MovieCardAsList;


