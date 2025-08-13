import {
  React,
  useSelector
} from "../../../services/centerServices";
import tempimg from "../../../assets/images/region_tick.png";
import product from "../../../assets/images/DXB-Standard-359x404.webp";
 
function Subscriptions() {

  const isAuth = useSelector((state) => state.auth);
  const stateSub = useSelector((state) => state.subscriptions);
  const userId = isAuth.data?.data?.user?.user_id;
 
  return (
    <>
      <div id="Subscriptions" className="contentWrap">
        <h4>Your Plan </h4>
        <div className="ProfileCard">
          <div>
            <h2>Standard</h2>
            <span>Auto-renews on 25 May 2023 at AED 740/year</span>
            <br/>
            <a href="#0">Upgrage plan</a>
          </div>
          <div><img src={product} alt=" " /> </div>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td>Estimated Savings </td>
              <td>AED 60,000+ </td>
            </tr>
            <tr>
              <td>Number of Offers </td>
              <td>6,000+ </td>
            </tr>
            <tr>
              <td>Number of Places </td>
              <td>
                2,000+ <br />
                <a href="#0">View all Places</a>
              </td>
            </tr>
            <tr>
              <td>Family Members </td>
              <td>3 </td>
            </tr>
            <tr>
              <td>Family Members </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Food & Beverages </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Attractions & Leisure </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Everyday Services </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Beauty & Fitness </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Food Delivery </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>5* hotel stay </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Gourmet and Fine Dining </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Valid in Dubai and N. Emirates </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Valid in Abu Dhabi and Al Ain </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
            <tr>
              <td>Worldwide access </td>
              <td>
                <img src={tempimg} alt=" " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Subscriptions;
