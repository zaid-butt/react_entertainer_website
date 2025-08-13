import {
  React,
  useParams,
  useDispatch,
  useSelector,
} from "../../../services/centerServices";
 
 
function RegionsPopup() {
  const { lang } = useParams();
  const dispatch = useDispatch();
  const stateLocations = useSelector((state) => state.locations);
  const locations = stateLocations.data?.data?.locations;


  const regions = locations
    .map((item) => item.region_name)
    .filter((value, index, self) => self.indexOf(value) === index);


  const getLocation = (locId, locName) => {
    localStorage.setItem("location_id", locId);
    localStorage.setItem("location_name", locName);
    
  };

  const generateSlug = (country_code, location_name) => {
    let cntry = country_code.toLowerCase();
    if (location_name == "Dubai") {
      location_name = "dubai-n-emirates";
    } else if (location_name == "Abu Dhabi") {
      location_name = "abu-dhabi-al-ain";
    }
    let loc = location_name.toLowerCase().replace(" ", "-");
    return "/" + lang + "-" + cntry + "/" + loc;
  };


  return (
    <>
      <div className="region-menu">
        <ul className="list-unstyled mb-0 region_list">
          {regions &&
            regions.map((region, k) => (
              <li className="Column" key={k}>
                <span className="listHead">{region}</span>
                <ul className="list-unstyled mb-0 list">
                  {locations &&
                    locations.map((item, i) =>
                      item.region_name === region ? (
                        <li
                          className={item.default_location_name + " "}
                          key={i}
                          onClick={() => getLocation(item.location_id, item.location_name)}
                        >
                          <a
                            href={generateSlug(
                              item.country_code,
                              item.default_location_name
                            )}
                          >
                            {item.location_name}
                          </a>
                           
                        </li>
                      ) : (
                        ""
                      )
                    )}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
export default RegionsPopup;
