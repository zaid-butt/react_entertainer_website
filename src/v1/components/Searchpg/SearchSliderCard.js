import img from "../../../../src/assets/images/SearchCard.png";

function SearchSliderCard() {
  return (
    <>
      <div className="SearchSliderCard">
        <div className="SearchSliderCard-imgbox">
          <img className="SearchSliderCard-img" src={img} alt="SearchCard_img" />
          <div className="SearchSliderCard-contentbg">
            <div className="SearchSliderCard-content">
              <div className="ss-cont_left">
                <h3>Brunches</h3>
                <span>1,145 Places</span>
              </div>
              <div className="ss-cont_right">
                <div>24,893</div>
                <span>Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSliderCard;
