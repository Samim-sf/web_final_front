import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import {Button} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieInformation = ({movieName, releaseYear, description, imageUrl, onHide, isShown}) => {
    return (
        <Modal
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={isShown}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    "{movieName}" complete information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid"
                     src={imageUrl}
                     alt=""/>
                <br/>
                Release year : {releaseYear}
                <br/>
                {description}
            </Modal.Body>
            <Modal.Footer className=" btn-success text-center text white justify-content-center">
                <Button onClick={onHide} className="text-white w-100">Ok</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default MovieInformation;