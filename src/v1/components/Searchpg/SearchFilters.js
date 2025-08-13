import { React, useState } from "../../../services/centerServices.js";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/Button";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Fragment, useEffect } from "react";
import { getFilterOptions } from "api/search/searchApi.js";
import useDecryptUrlParams from "hooks/useDecryptUrlParams.js";

function SearchFilters({
  //filtersData,
  setSelectedFilters,
  selectedFilters,
  resultCount,
  resultCountLoading,
  //handleFilterOpen,
}) {
  // getting query string and decoded data from  hook
  const [queryString, decodedQueryString] = useDecryptUrlParams();
  const [showModal, setShowModal] = useState(false);
  const [filtersLoading, setFiltersLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // setting filters empty when search field changes
  useEffect(() => {
    onFormReset();
  }, [queryString]);

  const handleFilterOpen = () => {
    // handling filters on filter click from child component
    if (selectedCategory !== decodedQueryString?.searchQuery) {
      // clear previous filter
      // calling the api only when the subcatogery is changed
      getFilterOptions({
        setLoading: setFiltersLoading,
        params: {
          ...decodedQueryString,
        },
      }).then((res) => {
        setFilters(res?.data?.filters);
        setSelectedCategory(decodedQueryString?.searchQuery);
      });
    }

    //setSelectedFilters({});
  };

  // saving filters api res
  const [filtersData, setFilters] = useState([]);
  const handleShow = () => {
    setShowModal(true);
    handleFilterOpen();
  };
  const handleClose = () => {
    //setFiltersLoading(true);
    setShowModal(false);
  };

  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedSub, setSelectedSub] = useState();
  const [checkboxCountData, setCheckboxCountData] = useState({});
  const onFormReset = () => {
    setSelectedFilters({});
    setCheckboxCountData({});
  };
  const handleRadioInput = ({ optionData }) => {
    setSelectedFilters((props) => ({
      ...props,
      [optionData.api_param_key]: optionData.api_param_value,
    }));
  };
  const handleCheckboxInput = ({ subOptions, parent }) => {
    setCheckboxCountData((prev) => {
      if (
        checkboxCountData[parent]?.includes(subOptions.analytics_param_value)
      ) {
        return {
          ...prev,
          [parent]: prev[parent]
            ? [
                ...prev[parent].filter(
                  (item) => item !== subOptions.analytics_param_value
                ),
              ]
            : [subOptions.analytics_param_value],
        };
      } else {
        return {
          ...prev,
          [parent]: prev[parent]
            ? [...prev[parent], subOptions.analytics_param_value]
            : [subOptions.analytics_param_value],
        };
      }
    });
    setSelectedFilters((prev) => {
      const updatedFilters = prev[subOptions.filter_api_param_key]
        ? [...prev[subOptions.filter_api_param_key]]
        : [];
      const indexToRemove = updatedFilters.indexOf(
        subOptions.filter_api_param_value
      );
      if (indexToRemove === -1) {
        // If the value doesn't exist in the array, add it
        updatedFilters.push(subOptions.filter_api_param_value);
      } else {
        // If the value exists in the array, remove it
        updatedFilters.splice(indexToRemove, 1);
      }
      return {
        ...prev,
        [subOptions.filter_api_param_key]: updatedFilters,
      };
    });
  };

  return (
    <Fragment>
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
      {showModal && (
        <Modal
          show={true}
          backdrop="static"
          keyboard
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
          className="sfpopup"
        >
          {filtersLoading ? (
            <div>Loading</div>
          ) : (
            <form>
              <ModalHeader>
                <h5 className="modal-title">Filters</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </ModalHeader>
              <Modal.Body>
                <Tab.Container id="sfpopup" defaultActiveKey="cuisines">
                  <div className="popup_left">
                    <Nav variant="pills" className="flex-column">
                      {/* main filters nav render */}
                      {filtersData?.map((filter, index) => {
                        return (
                          <Fragment key={index}>
                            <Nav.Item
                              onClick={() => {
                                filter?.sub_sections &&
                                  setSelectedSub(
                                    filter?.sub_sections[0].section_title
                                  );
                                setSelectedFilter(filter.section_title);
                              }}
                            >
                              <Nav.Link eventKey={filter.section_title}>
                                {filter?.sub_sections ? (
                                  <strong style={{ background: "red" }}>
                                    {filter.section_title}
                                  </strong>
                                ) : (
                                  <span>{filter.section_title}</span>
                                )}
                                <span className="navlinkvelue">
                                  {/* radio option selected render */}
                                  {/* {filter?.options &&
                                    selectedFilters[
                                      filter?.options[0]?.api_param_key
                                    ]?.title} */}
                                  {filter?.options &&
                                    filter?.options.map((filterOptionObj) => {
                                      if (
                                        filterOptionObj.filter_api_param_value ===
                                        selectedFilters[
                                          filter?.options &&
                                            filter?.options[0]?.api_param_key
                                        ]
                                      ) {
                                        return filterOptionObj.title;
                                      }
                                    })}

                                  {/* checkbox count render */}
                                  {checkboxCountData[filter?.section_title]
                                    ?.length > 0 &&
                                    `${
                                      checkboxCountData[filter?.section_title]
                                        ?.length
                                    }  selected`}

                                  {/* {view selected filter here} */}
                                </span>
                              </Nav.Link>
                            </Nav.Item>
                            {filter?.sub_sections?.map((subSection, index) => {
                              return (
                                <Nav.Item
                                  key={index}
                                  onClick={() => {
                                    setSelectedFilter(filter.section_title);
                                    setSelectedSub(subSection.section_title);
                                  }}
                                >
                                  <Nav.Link
                                    eventKey={
                                      filter.section_title +
                                      subSection.section_title
                                    }
                                  >
                                    <span>{subSection.section_title}</span>{" "}
                                    <span className="navlinkvelue">
                                      {/* {view selected filter here} */}
                                    </span>
                                  </Nav.Link>
                                </Nav.Item>
                              );
                            })}
                          </Fragment>
                        );
                      })}
                    </Nav>
                  </div>
                  <div className="popup_right">
                    <Tab.Content>
                      {/* filter options render */}
                      {filtersData?.map((filter, index) => {
                        return (
                          <Fragment key={index}>
                            {filter?.options ? (
                              <Fragment key={index}>
                                {filter.section_title === selectedFilter && (
                                  <div key={index}>
                                    <div className="sfpopup_body">
                                      {filter?.options?.map((option, index) => {
                                        return (
                                          <label className="radio" key={index}>
                                            {option.title}®{" "}
                                            <input
                                            name="radioInput"
                                              defaultChecked={
                                                selectedFilters[
                                                  option.api_param_key
                                                ] === option.api_param_value
                                              }
                                              type="radio"
                                              name="sortby"
                                              value={
                                                option.filter_api_param_value ||
                                                ""
                                              }
                                              onChange={() =>
                                                handleRadioInput({
                                                  optionData: option,
                                                })
                                              }
                                            />
                                            <span className="checkmark"></span>
                                          </label>
                                        );
                                      })}{" "}
                                    </div>
                                  </div>
                                )}
                              </Fragment>
                            ) : (
                              filter?.sub_sections?.map((subSection, index) => {
                                return (
                                  <Fragment key={index}>
                                    {" "}
                                    {selectedFilter === filter.section_title &&
                                      selectedSub ===
                                        subSection.section_title && (
                                        <div key={index}>
                                          <div className="sfpopup_body">
                                            {subSection?.options?.map(
                                              (subOptions, index) => {
                                                return (
                                                  <label
                                                    className="checkbox"
                                                    key={index}
                                                  >
                                                    {subOptions.title}
                                                    <input
                                                    name="checkboxInout"
                                                      // value={
                                                      //   subOptions.filter_api_param_value
                                                      // }
                                                      type="checkbox"
                                                      checked={
                                                        // selectedFilters[
                                                        //   filter.section_title
                                                        // ]?.[
                                                        //   subOptions
                                                        //     .filter_api_param_key
                                                        // ]?.[
                                                        //   subOptions
                                                        //     .filter_api_param_value
                                                        // ]
                                                        selectedFilters[
                                                          subOptions
                                                            .api_param_key
                                                        ]?.includes(
                                                          subOptions.filter_api_param_value
                                                        ) || false
                                                      }
                                                      onChange={() =>
                                                        handleCheckboxInput({
                                                          subOptions,
                                                          parent:
                                                            filter.section_title,
                                                        })
                                                      }
                                                    />

                                                    <span className="checkmark"></span>
                                                  </label>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      )}
                                  </Fragment>
                                );
                              })
                            )}
                          </Fragment>
                        );
                      })}
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="link"
                  type="reset"
                  value="Reset Form"
                  onClick={onFormReset}
                >
                  Clear all
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  {resultCountLoading
                    ? "Loading"
                    : `Show ${resultCount} result`}
                </Button>
              </Modal.Footer>
            </form>
          )}
        </Modal>
      )}
    </Fragment>
  );
}

export default SearchFilters;
