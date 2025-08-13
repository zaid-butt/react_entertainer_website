/*eslint-disable*/
import {
  React,
  useState,
  useEffect,
} from "../../../../services/centerServices";

function SFcuisines() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam] = useState(["All"]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return <p>{error.message}, API I used might have stopped working.</p>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <>
        <div id="cuisines_searchbox">
            <input id="sfsearch-form" className="form-control" autoComplete="off" type="search" name="search-form" placeholder="Search" value={q}
              onChange={(e) => setQ(e.target.value)}
            />
        </div>
        <div className="sfpopup_body">
          <div className="row">
            {search(data).map((item) => (
              <div className="col-md-6" key={item.alpha3Code}>
                <label className="checkbox">
                  {item.name}
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default SFcuisines;
