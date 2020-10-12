import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className='row d-flex align-items-center'>
      <div className='col-md-4 offset-md-1'>
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className='text-secondary'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <Link to='/appointment'>
          <button className='btn btn-brand'>GET APPOINTMENT</button>
        </Link>
      </div>
      <div className='col-md-6'>
        <img src={chair} alt='' className='img-fluid' />
      </div>
    </main>
  );
};

export default HeaderMain;
