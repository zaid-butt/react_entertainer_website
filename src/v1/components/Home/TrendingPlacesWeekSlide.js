import {
  React,
  useState,
  useEffect,
  useSelector,
  useDispatch,
} from "../../../services/centerServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TrendingPlacesWeekSlideSkel from "./TrendingPlacesWeekSlideSkel.js";
import Mcard from "../Outlets/Mcard";
//import  "../../../assets/css/_checkbox.css";

function TrendingPlacesWeekSlide({
  trending,
  neighbors,
  category,
  filterNeighbourhood,
}) {
  const [result, setResult] = useState();

  const [checked, setChecked] = useState([]);
  const handleChecked = (event) => {
    var checkedList = [...checked];
    if (event.target.checked) {
      checkedList = [...checked, event.target.value];
    } else {
      checkedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(checkedList);
    filterNeighbourhood(category, checkedList);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    filterNeighbourhood(category, option);
  };

  useEffect(() => {
    setResult(trending.data?.outlets);
  }, [trending]);

  const getNeighbours = () => {
    return (
      neighbors &&
      neighbors.map((neb, k) => (
        <label className="checkbox" key={neb}>
          <input
            name="neibs"
            className="checked"
            type="checkbox"
            checked={selectedOption === neb}
            value={neb}
            onChange={() => handleCheckboxChange(neb)}
            // onChange={handleChecked}
          />
          <span className="Mbadge">{neb}</span>
          <span className="checkmark"></span>
        </label>
      ))
    );
  };

  return (
    <>
      <div className="HomeMerchentSlides">
        <div className="Mbadgebox">
          Neighbourhood <i className="bi bi-chevron-right"></i>
          {trending.isLoading ? "loading" : getNeighbours()}
        </div>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {result &&
            result.map((outlet, k) => (
              <SwiperSlide key={outlet.id}>
                {trending.isLoading || trending.isNeighbours ? (
                  <TrendingPlacesWeekSlideSkel />
                ) : (
                  <Mcard
                    name={outlet.merchant.name}
                    img={outlet.merchant.photo_small_url}
                    logo={outlet.merchant.logo_small_url}
                    rating={"4.5"}
                    price={"Est. Savings AED 100"}
                    tags={outlet.tags}
                    included={outlet.logical_products}
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default TrendingPlacesWeekSlide;
