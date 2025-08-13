import Savings from "../../../assets/images/ProSavings.svg";
import Smiles from "../../../assets/images/ProSmiles.svg";
import Gifts from "../../../assets/images/ProGifts.svg";
// dummy data

function Profile() {
  const data= {
    customer_profile: {
        country_of_residence: "ET",
        mobile_phone: "03124289936",
        dob: null,
        gender: "female",
        firstname: "Bb",
        lastname: "T",
        nationality: "AF"
    },
    user_savings:{currency:"USD", value:"189.73"},
    user_smile_summary: 13357
  }
  return (
    <>
      <div className="profile_SSG">
        <div className="ProSavings">
          <img src={Savings} alt=" " />
          <div>
            <p>Savings</p>
            <span>{data.user_savings.currency} </span>
            <strong>{data.user_savings.value}</strong>
          </div>
        </div>
        <div className="devider"></div>
        <div className="ProSmiles">
          <img src={Smiles} alt=" " />
          <div>
            <p>Smiles</p>
            <strong>{data.user_smile_summary}</strong>
          </div>
        </div>
        <div className="devider"></div>
        <div className="ProGifts">
          <img src={Gifts} alt=" " />
          <div>
            <p>Gifts</p>
            <strong>4, 943</strong>
          </div>
        </div>
      </div>
      <div id="Profile_contentWrap" className="contentWrap">
        <h4>Profile </h4>
        <table>
          <tbody>
            <tr>
              <td>First Name:</td>
              <th scope="row">{data.customer_profile.firstname}</th>
            </tr>
            <tr>
              <td>Last Name:</td>
              <th scope="row">{data.customer_profile.lastname}</th>
            </tr>
            <tr>
              <td>DoB:</td>
              <th scope="row">{data.customer_profile.dob}</th>
            </tr>
            <tr>
              <td>Nationality</td>
              <th scope="row">{data.customer_profile.nationality}</th>
            </tr>
            <tr>
              <td>Country of Residence</td>
              <th scope="row">{data.customer_profile.country_of_residence}</th>
            </tr>
            <tr>
              <td>Gender</td>
              <th scope="row">{data.customer_profile.gender}</th>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <th scope="row">{data.customer_profile.mobile_phone}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile;
