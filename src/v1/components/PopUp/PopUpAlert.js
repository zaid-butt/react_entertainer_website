import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PoUpAlert({ btnType, btnText, btnClass, poupSize, popupClass,  popupTitle, popupDesc, btnTextClose }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getBtn = () => {
    if (btnType === "icon") {
      return <span onClick={handleShow} className={btnClass}>{btnText} <span className="iicon">i</span> </span>;
    } else {
      return <button onClick={handleShow}> {btnText} </button>;
    }
  };

  return (
    <>
      {getBtn()}
      <Modal
        show={show}
        onHide={handleClose}
        size={poupSize}
        centered
        className={popupClass}
      >
        <Modal.Header>
          <Modal.Title><span>{popupTitle}</span>
          <i class="bi bi-x-lg" onClick={handleClose}></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{popupDesc}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" onClick={handleClose}>
            {btnTextClose}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PoUpAlert;
