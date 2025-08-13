function VIPKeyActivation() {
  return (
    <>
      <div id="VIPKeyActivation" className="contentWrap">
        <h4>Activate VIP Key </h4>
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="EnterYourActivationCodeHere"
              placeholder="Enter your activation code here"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Activate
          </button>
        </form>
      </div>
    </>
  );
}

export default VIPKeyActivation;
