import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";

function AlertModal({title, desc, isShow, isShown}) {
    const [getShow, setGetShow] = useState(isShow);
    console.log(getShow);
    console.log(isShow);
    const handleClose = () => {
        setGetShow(false)
        isShown();
    };
    return (
        <>
            <Modal show={getShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`${title}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`${desc}`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>cancel</Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AlertModal;