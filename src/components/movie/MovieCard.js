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

const MovieCard = () => {
    const [getIsShownModal, setIsShownModal] = useState(false);
    let alertModal = null;
    const deleteModal = () => {
        setIsShownModal(!getIsShownModal);
    }

    if (getIsShownModal) {
        alertModal =
            <AlertModal title="Warning" desc="Delete this movie?" isShow={getIsShownModal} isShown={deleteModal}/>;
    }
    return (
        <Fragment>
            {alertModal}
            <Card sx={{maxWidth: 345}} className="m-5 border-radius">
                <CardMedia
                    component="img"
                    height="194"
                    image={"../../public/logo192.png"}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="delete movie" onClick={deleteModal}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <EditIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default MovieCard;


