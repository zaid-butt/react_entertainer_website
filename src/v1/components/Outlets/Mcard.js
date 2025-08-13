import { React } from "../../../services/centerServices";
import "./Mcard.css";

function Mcard(props) {
  //const { t } = useTranslation();
  return (
    <>
      <div className="MCard">
        <div className="MCard-imgbox">
          <img className="MCard-img" src={props.img} alt=" " />
          <div className="MCard-logobox">
            <img src={props.logo} alt=" " />
          </div>
        </div>
        <div className="MCard-content">
          <div className="MCard-rating">{props.rating}</div>
          <h5 className="MCard-title">{props.name}</h5>
          <p className="MCard-price">{props.price} </p>

          <div className="MCard-tags">
            {props.tags.map((tag, i) => (
             <span className={"tags " + tag.identifier} key={i}>
               {tag.title}
               </span> 
            ))}
          </div>

          <div className="MCard-included">
            Included in:
            <ul>
              {props.included.slice(0, 3).map((lp, i) => (
                <li key={i}>
                  <a href="#0">{lp.name.split(" ")[0]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mcard;
