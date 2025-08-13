function SearchTopheader() {
  return (
    <>
      <div className="SearchTopheader">
        <div className="STH-cat">
          <div>Food & drinks</div>
          <div><img src="https://b2cappassetscdn.theentertainerme.com/website_images/search_icon_arrow.svg" alt="search_icon_arrow" /></div>
        </div>
        <div className="STH-PlacesOffers">
          <div className="STH-Places"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/search_icon_place.svg" alt="search_icon_place" /><span>5,367 </span> Places</div>
          <div className="STH-devider">|</div>
          <div className="STH-Offers"><img src="https://b2cappassetscdn.theentertainerme.com/website_images/search_icon_tag.svg" alt="search_icon_tag" /><span>30,567 </span> Offers</div>
        </div>
        <div className="STH-map">
          <a href="#0">Map View </a>
        </div>
      </div>
    </>
  );
}

export default SearchTopheader;
