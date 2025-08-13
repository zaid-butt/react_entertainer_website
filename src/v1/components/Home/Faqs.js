import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionButton from "react-bootstrap/AccordionButton";
import { useTranslation } from "react-i18next";
import "./Faqs.css";


function Faqs() {
  const { t } = useTranslation();
  return (
    <>
      <div id="FAQ" className="container padtop padbot">
        <h2 className="text-center">{t("faq.heading_faq")}</h2>
        <Accordion defaultActiveKey="0" id="faqaccordion">
          <Accordion.Item eventKey="0">
            <AccordionButton bsPrefix="btn btn-block">
              {t("faq.what_entertainer")}
              <i className="bi bi-chevron-up accordion_arrow"></i>
              <i className="bi bi-chevron-down accordion_arrow"></i>
            </AccordionButton>
            <Accordion.Body>{t("faq.what_entertainer_ans")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <AccordionButton bsPrefix="btn btn-block">
              {t("faq.where_save")}
              <i className="bi bi-chevron-up accordion_arrow"></i>
              <i className="bi bi-chevron-down accordion_arrow"></i>
            </AccordionButton>
            <Accordion.Body>
              {t("faq.where_save_ans")}
              <a
                rel="noreferrer"
                href="https://www.theentertainerme.com/search/outlets"
                id="search_page"
                target="_blank"
                style={{ wordBreak: "break-word" }}
              >
                https://www.theentertainerme.com/search/outlets
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <AccordionButton bsPrefix="btn btn-block">
              {t("faq.how_offer")}

              <i className="bi bi-chevron-up accordion_arrow"></i>
              <i className="bi bi-chevron-down accordion_arrow"></i>
            </AccordionButton>
            <Accordion.Body>
              {t("faq.how_offer_ans")}
              <a
                href="https://hub.theentertainerme.com/knowledge-base/how-to-redeem"
                rel="noreferrer"
                id="redeem"
                target="_blank"
                style={{ wordBreak: "break-word" }}
              >
                https://hub.theentertainerme.com/knowledge-base/how-to-redeem
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <AccordionButton bsPrefix="btn btn-block">
              {t("faq.what_entertainer_lite")}
              <i className="bi bi-chevron-up accordion_arrow"></i>
              <i className="bi bi-chevron-down accordion_arrow"></i>
            </AccordionButton>
            <Accordion.Body>
              {t("faq.what_entertainer_lite_ans")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <a className="btn btn-light faqbtn" href="https://hub.theentertainerme.com/article-categories/faqs">
          {t("faq.view_all")}
        </a>
      </div>
    </>
  );
}

export default Faqs;
