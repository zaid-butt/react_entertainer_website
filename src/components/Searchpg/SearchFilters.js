import { React, useState } from "services/centerServices.js";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from 'react-bootstrap/Button';
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { SFcuisines } from "./filters/SF.js";

function SearchFilters() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showsortby, setTopping] = useState("Top rated")
  const onOptionChange = e => {
    setTopping(e.target.value)
  }
  const onFormReset = showsortby => {
    setTopping(showsortby="Top rated")
  }


  
  return (
    <>
      <div className="SearchFilters">
        <ScrollingCarousel>
          <span onClick={handleShow} className="FilterBadge">
          <span className="FilterBadge_content">
            <img
              alt="Filters"
              src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_filter.svg"
            />
            Filters
          </span>
          </span>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Takeaway"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_takeaway.svg"
              />
              Takeaway
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="New"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_new.svg"
              />
              New
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Lite"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_lite.svg"
              />
              Lite
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Dine-in"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_dine.svg"
              />
              Dine-in
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Delivery"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_delivery.svg"
              />
              Delivery
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Top rated"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_toprated.svg"
              />
              Top rated
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Best reviewed"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_best.svg"
              />
              Best reviewed
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="25% OFF"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_percent.svg"
              />
              25% OFF
            </span>
            <span className="checkmark"></span>
          </label>
          <label className="FilterBadge">
            <input type="checkbox" />
            <span className="FilterBadge_content">
              <img
                alt="Buy one get one free"
                src="https://b2cappassetscdn.theentertainerme.com/website_images/icon-s_tag.svg"
              />
              Buy one get one free
            </span>
            <span className="checkmark"></span>
          </label>
        </ScrollingCarousel>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="sfpopup"
      >
        <form>
        <ModalHeader>
          <h5 className="modal-title">
            Filters
          </h5>
          <button type="button" className="close" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </ModalHeader>
        <Modal.Body>
          <Tab.Container id="sfpopup" defaultActiveKey="cuisines">
            <div className="popup_left">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="sortby"><span>Sort by</span> <span className="navlinkvelue">{showsortby}</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="offertype">Offer type </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="cuisines">Cuisines</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="subcategories">Sub categories </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="otherattributes">
                    Other attributes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="amenities">Amenities </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="popup_right">
              <Tab.Content>
                <Tab.Pane eventKey="sortby">
                <div className="sfpopup_body">
                    <label className="radio">
                      Nearest
                      <input
                      type="radio"
                      name="sortby"
                      value="Nearest"
                      onChange={onOptionChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">
                      Top rated
                      <input
                      defaultChecked="checked"
                      type="radio"
                      name="sortby"
                      value="Top rated"
                      onChange={onOptionChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">
                      New
                      <input
                      type="radio"
                      name="sortby"
                      value="New"
                      onChange={onOptionChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="offertype"><div className="sfpopup_body">Offer type </div></Tab.Pane>
                <Tab.Pane eventKey="cuisines">{<SFcuisines />} </Tab.Pane>
                <Tab.Pane eventKey="subcategories"><div className="sfpopup_body">Sub categories </div></Tab.Pane>
                <Tab.Pane eventKey="otherattributes"><div className="sfpopup_body">
                  Other attributes</div>
                </Tab.Pane>
                <Tab.Pane eventKey="amenities"><div className="sfpopup_body">Amenities </div></Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" type="reset" value="Reset Form" onClick={onFormReset}>Clear all</Button>
          <Button variant="primary">Show 200 result</Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default SearchFilters;
