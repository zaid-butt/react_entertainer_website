import PGproImg from "../../../assets/images/PGproImg.jpeg";
//dummy
import React from "react";

function UserBadg() {
  return (
    <>
      <div className="PGproImg ">
        <div className="pro_img">
          <img src={PGproImg} alt="PGproImg" />
        </div>
        <span>Member</span>
        </div>
      <div className="PGproName">
        Welcome
        <span>Adam Lane</span>
        <p>Member since Jun 20,2028</p>
      </div>
    </>
  );
}

export default UserBadg;
