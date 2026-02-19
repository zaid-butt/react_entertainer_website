import React from 'react';
import "assets/css/all.css"
import loading from "assets/loader/loader_final.gif"

function Loadering() {
  return (
    <>
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
    </>
  );
}
export default Loadering;
