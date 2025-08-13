import Savings from "assets/images/ProSavings.svg";
import Smiles from "assets/images/ProSmiles.svg";
import Gifts from "assets/images/ProGifts.svg";
// dummy data
function Profile() {
  return (
    <>
      <div className="profile_SSG">
        <div className="ProSavings">
          <img src={Savings} alt=" " />
          <div>
            <p>Savings</p>
            <span>AED </span>
            <strong>25,6789</strong>
          </div>
        </div>
        <div className="devider"></div>
        <div className="ProSmiles">
          <img src={Smiles} alt=" " />
          <div>
            <p>Smiles</p>
            <strong>8,943</strong>
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
              <th scope="row">Adam</th>
            </tr>
            <tr>
              <td>Last Name:</td>
              <th scope="row">Lee</th>
            </tr>
            <tr>
              <td>DoB:</td>
              <th scope="row">23 April 1995</th>
            </tr>
            <tr>
              <td>Nationality</td>
              <th scope="row">Azarbaijani</th>
            </tr>
            <tr>
              <td>Country of Residence</td>
              <th scope="row">Dubai</th>
            </tr>
            <tr>
              <td>Gender</td>
              <th scope="row">Male</th>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <th scope="row">+9713464402545</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile;
