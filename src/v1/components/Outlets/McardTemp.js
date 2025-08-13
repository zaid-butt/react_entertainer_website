import { React } from "../../../services/centerServices";
import "./Mcard.css";

function Mcard({ outlet }) {
  //const { t } = useTranslation();
  return (
    <>
      <div className="MCard">
        <div className="MCard-imgbox">
          <img
            className="MCard-img"
            src={outlet?.merchant?.photo_small_url}
            alt=" "
            loading="lazy"
          />
          <div className="MCard-logobox">
            <img src={outlet?.merchant?.logo_small_url} alt=" " loading="lazy"/>
          </div>
        </div>
        <div className="MCard-content">
          <div className="MCard-rating">{outlet?.google_rating}</div>
          <h5 className="MCard-title">{outlet?.merchant.name}</h5>
          <p className="MCard-price">{"{props.price}"} </p> {/* //thisssssss */}
          <div className="MCard-tags">
            {outlet.tags &&
              outlet.tags.map((tag, index) => {
                return (
                  // <>
                  //   {" "}
                  //   {tag?.abbreviated_text && (
                  //     <div className={"tags " + tag.identifier}>
                  //       {tag?.abbreviated_text}{" "}
                  //     </div>
                  //   )}
                  // </>
                  <div key={index} className={"tags " + tag.identifier}>
                    {tag?.abbreviated_text}{" "}
                  </div>
                );
              })}
          </div>
          {outlet.logical_products.length !== 0 && (
            <div className="MCard-included">
              Included in:
              <ul>
                {outlet.logical_products &&
                  outlet.logical_products.map((plan, index) => {
                    return (
                      <li key={index}>
                        <a href=" ">{plan.name}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mcard;
