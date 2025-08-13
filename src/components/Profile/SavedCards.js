import Mastercard from "assets/images/icon_Mastercard.svg";
// dummy data
function SavedCards() {
  return (
    <>
      <div id="SavedCards" className="contentWrap">
        <h4>Saved Cards </h4>
        <div className="CardsHistory">
          <img src={Mastercard} alt="card" />
        <span>Card ending in 3714</span>
        </div>
        <table className="table">
          <tbody>
          <tr className="tableheader">
              <td>Billing History</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>TX44389 </td>
              <td>23 May 2021 </td>
              <td>4:23 pm </td>
              <td className="price">AED 620 </td>
            </tr>
            <tr>
              <td>TX44123 </td>
              <td>23 May 2021 </td>
              <td>4:23 pm </td>
              <td className="price">AED 620 </td>
            </tr>
            <tr>
              <td>TX44321 </td>
              <td>23 May 2021 </td>
              <td>4:23 pm </td>
              <td className="price">AED 620 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SavedCards;
