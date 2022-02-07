import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

function AlertDeleteModal({id, title, desc, isShow, isShown, isDeleted}) {
    const [getShow, setGetShow] = useState(isShow);
    const handleClose = () => {
        setGetShow(false)
        isShown();
    };
    const handleDelete = async () => {
        await axios.post(
            'http://localhost:8000/index.php/delete/?id=' + id
        )
            .then((response) => {
                handleClose();
                toast.success("Movie deleted successfully", {
                    position: "bottom-right",
                    closeOnClick: true

                });
                isDeleted();
            });
    }
    return (
        <>
            <Modal show={getShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${title}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`${desc}`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>cancel</Button>
                    <Button variant="primary" onClick={handleDelete}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AlertDeleteModal;