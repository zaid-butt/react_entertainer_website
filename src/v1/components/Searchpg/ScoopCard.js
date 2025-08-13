import img from "../../../../src/assets/images/ScoopCard.png";
import "./ScoopCard.css";
function ScoopCard() {
  return (
    <>
      <div className="ScopCard">
        <div className="ScopCard-imgbox">
          <img className="ScopCard-img" src={img}  alt="img" />
          <div className="ScopCard-tag">Travel</div>
        </div>
        <div className="ScopCard-content">
          <h5 className="ScopCard-title">
            Need help deciding where to go for Iftar in Abu Dhabi?
          </h5>
        </div>
        <div className="ScopCard-date">5 April 2022</div>
      </div>
    </>
  );
}

export default ScoopCard;
