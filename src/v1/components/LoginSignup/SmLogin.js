import React from "react";

function SmLogin() {
  return (
    <>
      <div className="social_login">
        <a className="btn btn-block" href="#0">
          <img
            src="https://b2cappassetscdn.theentertainerme.com/website_images/smi_g.svg"
            alt=" "
          />
          Continue with Google
        </a>
        <a className="btn btn-block" href="#0">
          <img
            src="https://b2cappassetscdn.theentertainerme.com/website_images/smi_f.svg"
            alt=" "
          />
          Continue with Facebook
        </a>
        <div className="social_login_divider">
          <span>OR</span>
        </div>
      </div>
    </>
  );
}

export default SmLogin;
