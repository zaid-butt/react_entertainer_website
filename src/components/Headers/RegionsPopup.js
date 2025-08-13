
import React from "react";

function RegionsPopup () {
    return (
    <>
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
    </>
    );
}
export default RegionsPopup;