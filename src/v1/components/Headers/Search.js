/*eslint-disable*/
import { React } from "../../../services/centerServices.js";
import { Form, Input } from "reactstrap";
import "./Search.css"

function Search() {
  return (
    <>
      <Form className="searchbox">
      <div className="searchboxwrap">
        <Input
          className="form-control mr-sm-2 search"
          type="text"
          placeholder="Restaurant, hotels, etc..."
          autoComplete="off"
          required="required"
          aria-label="Search"
        />
        <button
          type="reset"
          title="Clear the search query."
          className="search_close"
        >
          <svg
            role="img"
            aria-label="Reset"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 348.333 348.334"
          >
            <g>
              <g>
                <path
                  d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85   c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563   c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85   l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554   L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                  className="active-path"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <div id="search_suggestion" style={{display: "none"}}>
        <div id="sugges_wrap">
          <div className="sugges_wraptop"><span>Suggestions</span><a href="#0">View all</a></div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://s3-us-west-2.amazonaws.com/ent-search-results/cuisine.png"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  <strong>Pizz</strong>a
                </div>
                <p>Cuisines</p>
              </div>
              {/* <div class="stags"></div>
              <div class="distance">7.2 km</div> */}
            </div>
          </div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://offerengine.theentertainerme.com/pizzolo-x23900457/merchant_primary_logo_%28retina%29_-_merchant202011231304.jpg"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  <strong>Pizz</strong>olo
                </div>
                <p>Hyatt Regency Dubai</p>
              </div>
              <div class="stags">
                <span class="tags buy_one_get_one_free">B1G1</span>
                <span class="tags freemium">lite</span>
              </div>
              <div class="distance">7.2 km</div>
            </div>
          </div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://offerengine.theentertainerme.com/pizza-2-go-x122645/merchant_primary_logo_%28retina%29_-_merchant.png"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  <strong>Pizz</strong>a 2 Go
                </div>
                <p>Al Karama</p>
              </div>
              <div class="stags">
                <span class="tags delivery">Delivery</span>
                <span class="tags percentage_off">25% off</span>
                <span class="tags takeaway">Takeaway</span>
              </div>
              <div class="distance">7.2 km</div>
            </div>
          </div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://offerengine.theentertainerme.com/don-pizza-x23892724/merchant_primary_logo_%28retina%29_-_merchant202002111545.jpg"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  Don <strong>Pizz</strong>a
                </div>
                <p>Manor Hotel</p>
              </div>
              <div class="stags">
                <span class="tags buy_one_get_one_free">B1G1</span>
                <span class="tags delivery">Delivery</span>
                <span class="tags percentage_off">25% off</span>
              </div>
              <div class="distance">7.2 km</div>
            </div>
          </div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://offerengine.theentertainerme.com/six-pizza-x23912762/merchant_primary_logo_%28retina%29_-_merchant2021010061347.jpg"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  Six <strong>Pizz</strong>a
                </div>
                <p>Barsha Heights</p>
              </div>
              <div class="stags">
                <span class="tags delivery_only">Delivery only</span>
                <span class="tags buy_one_get_one_free">B1G1</span>
                <span class="tags percentage_off">25% off</span>
              </div>
              <div class="distance">7.2 km</div>
            </div>
          </div>
          <div class="sugges_wrap">
            <div class="imgbox">
              <img
                src="https://offerengine.theentertainerme.com/pizza-bros-x23899374/merchant_primary_logo_%28retina%29_-_merchant202303231213.jpg"
                alt="product"
              />
            </div>
            <div class="content">
              <div class="title">
                <div>
                  <strong>Pizz</strong>a Bros
                </div>
                <p>Al Karama</p>
              </div>
              <div class="stags">
                <span class="tags delivery_only">Delivery only</span>
                <span class="tags buy_one_get_one_free">B1G1</span>
                <span class="tags percentage_off">25% off</span>
              </div>
              <div class="distance">7.2 km</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Form>
    </>
  );
}
export default Search;
