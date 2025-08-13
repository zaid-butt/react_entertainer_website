
import React, { useEffect, useState } from "react";


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle'

// core components
import Header from "../components/Headers/Header.js";
import Footer from "../components/Footer/Footer.js";
// index sections

 
import { useSelector, useDispatch } from 'react-redux';
import { language } from 'redux/languageReducers';
import { nodeApi } from "../../services/apiServices";
import { data } from "jquery";
function Index() {

  localStorage.removeItem("auth")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  function emailExist() {
    nodeApi.post('email/exist', {
      "email": "abrar.test.27.jan@gmail.com",
    })
      .then(res => {
        // const resp = atob(res.data)
        // const decoded = JSON.parse(resp);
        console.log('res.data')
        console.log(res.data)
      }).catch(function (error) {
        console.log('error')
        console.log(error)
      })
  }

  useEffect(() => {
    // emailExist()
  }, []);


  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef((onClick, { children }) => (
    <span
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  ));

  return (
    <>
      {<Header />}
      <div className="wrapper">

        <div>
          <p>language: {lang}</p>
          <button onClick={() => dispatch(language('ru'))}>language</button>

        </div>
        

        <div>ZtestPg </div>

        <br /><br /><br />

        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <br /><br /><br />

        <Modal id="regions" show={show} onHide={handleClose}
          backdrop="static"
          keyboard
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable>
          <ModalHeader>
            <h5 className="modal-title" id="toplocflagLabel">Choose your location</h5>
            <button type="button" className="close" onClick={handleClose}> <span>&times;</span> </button>
          </ModalHeader>
          <Modal.Body>
            <div className="region-menu">
              <ul className="list-unstyled mb-0 region_list">
                <li className="Column"> <span className="listHead">Middle East</span>
                  <ul className="list-unstyled mb-0 list">
                    <li className="Dubai active"> <a href="en-ae/dubai-n-emirates"> Dubai &amp; N. Emirates </a> </li>
                    <li className="Dubai"> <a href="en-ae/abu-dhabi-al-ain"> Abu Dhabi &amp; Al Ain </a> </li>
                    <li className="Bahrain"> <a href="en-bh/bahrain"> Bahrain </a> </li>
                    <li className="Kuwait"> <a href="en-kw/kuwait"> Kuwait </a> </li>
                    <li className="Oman"> <a href="en-om/oman"> Oman </a> </li>
                    <li className="Qatar"> <a href="en-qa/qatar"> Qatar </a> </li>
                    <li className="Riyadh"> <a href="en-sa/riyadh"> Riyadh </a> </li>
                    <li className="Riyadh"> <a href="en-sa/jeddah"> Jeddah </a> </li>
                    <li className="Riyadh"> <a href="en-sa/eastern-province"> Eastern Province </a> </li>
                  </ul>
                </li>
                <li className="Column"> <span className="listHead">Africa</span>
                  <ul className="list-unstyled mb-0 list">
                    <li className="Cape-Town"> <a href="en-za/cape-town"> Cape Town </a> </li>
                    <li className="Cape-Town"> <a href="en-za/johannesburg-pretoria"> Johannesburg &amp; Pretoria </a> </li>
                    <li className="Cape-Town"> <a href="en-za/durban"> Durban </a> </li>
                  </ul>
                </li>
                <li className="Column"> <span className="listHead">Asia</span>
                  <ul className="list-unstyled mb-0 list">
                    <li className="Singapore"> <a href="en-sg/singapore"> Singapore </a> </li>
                  </ul>
                </li>
              </ul>
            </div>

          </Modal.Body>
        </Modal>

        <br /><br /><br />

        <Dropdown>
          <DropdownToggle className="toprt_downapp btn btn-light my-2 my-sm-0">
            Download app
          </DropdownToggle>

          <Dropdown.Menu>
            <a className="dropdown-item" href="#0">Action</a>
            <a className="dropdown-item" href="#0">Another action</a>
            <a className="dropdown-item" href="#0">Something else here</a>
          </Dropdown.Menu>
        </Dropdown>

        <br /><br /><br />

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br /><br /><br />


        <br /><br /><br />

      </div>
      {<Footer />}
    </>
  );
}

export default Index;
