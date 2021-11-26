import React, {useState} from "react";
import "./CommonModal.css";
import Modal from 'react-bootstrap/Modal'
import logoImage from "../../assets/logo-dark.svg";
import busImage from "../../assets/bus.svg";

const CommonModal = (props) => {
    const [modalShow, setModalShow] = useState(true);

    const handleModalToggle = () => {
        setModalShow(!modalShow);
    }

    return (
        <>
            <Modal {...props}
                   aria-labelledby="contained-modal-title-vcenter"
                   show={props.showModal}
                   size="lg"
                   onHide={handleModalToggle}
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img src={logoImage} alt="dark logo image" className="modal-logo-image"/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <img className="img-fluid modal-image" src={busImage} alt="bus-image"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">

                        </div>
                    </div>
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <button onClick={props.toggleModal}>*/}
                {/*        Close*/}
                {/*    </button>*/}
                {/*    <button onClick={props.toggleModal}>*/}
                {/*        Save Changes*/}
                {/*    </button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
}

export default CommonModal;
