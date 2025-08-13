function Preferences() {
  return (
    <>
      <div id="Preferences" className="contentWrap">
        <h4>Manage your communication preferences </h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div>
                  <strong>
                    What would you like us to communicate with you about?
                  </strong>
                  <br />
                  <br />
                  Latest places and offers
                </div>

                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="LatestPlacesAndOffers"
                  />
                  <label className="custom-control-label" htmlFor="LatestPlacesAndOffers">
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>Promos and discounts</div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="PromosAndDiscounts"
                  />
                  <label className="custom-control-label" htmlFor="PromosAndDiscounts">
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>Travel</div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Travel"
                  />
                  <label className="custom-control-label" htmlFor="Travel">
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>Tripadvisor emails </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="TripadvisorEmails"
                  />
                  <label className="custom-control-label" htmlFor="TripadvisorEmails">
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <strong>
                    It takes up to 48 hours to update our system with your
                    preferences, so it's possible you may receive additional
                    emails from us.
                  </strong>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Preferences;
