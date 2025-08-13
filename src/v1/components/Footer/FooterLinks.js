import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionButton from "react-bootstrap/AccordionButton";

function FooterLinks() {
  return (
    <>
      <Accordion id="footeraccordion">
        <Accordion.Item eventKey="0">
          <AccordionButton bsPrefix="btn btn-block">
            Company <i className="bi bi-chevron-up accordion_arrow"></i>
            <i className="bi bi-chevron-down accordion_arrow"></i>
          </AccordionButton>
          <Accordion.Body>
            <ul className="footer_links">
              <li>
                <a href="#plans">Memberships</a>
              </li>
              <li>
                <a href="https://ae.theentertainerme.com/">The Scoop</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <AccordionButton bsPrefix="btn btn-block">
            Corporate <i className="bi bi-chevron-up accordion_arrow"></i>
            <i className="bi bi-chevron-down accordion_arrow"></i>
          </AccordionButton>
          <Accordion.Body>
            <ul className="footer_links">
              <li>
                <a href="0#">Become a partner</a>
              </li>
              <li>
                <a href="https://business.theentertainerme.com/">Business</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/the-entertainer-/">Careers</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <AccordionButton bsPrefix="btn btn-block">
            Help & Support <i className="bi bi-chevron-up accordion_arrow"></i>
            <i className="bi bi-chevron-down accordion_arrow"></i>
          </AccordionButton>
          <Accordion.Body>
            <ul className="footer_links">
              <li>
                <a href="0#">Rules of use</a>
              </li>
              <li>
                <a href="0#">Hotel rules of use</a>
              </li>
              <li>
                <a href="https://hub.theentertainerme.com/en/article-categories/faqs">FAQs</a>
              </li>
              <li>
                <a href="0#">Contact us</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <AccordionButton bsPrefix="btn btn-block">
            Legal <i className="bi bi-chevron-up accordion_arrow"></i>
            <i className="bi bi-chevron-down accordion_arrow"></i>
          </AccordionButton>
          <Accordion.Body>
            <ul className="footer_links">
              <li>
                <a href="0#">End User License Agreement</a>
              </li>
              <li>
                <a href="0#">Terms of sale</a>
              </li>
              <li>
                <a href="0#">Terms of use</a>
              </li>
              <li>
                <a href="0#">Privacy policy</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FooterLinks;
