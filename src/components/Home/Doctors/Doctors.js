import React from "react";
import Doctor from "../Doctor/Doctor";
const Doctors = () => {
  return (
    <section className='doctors'>
      <div className='container'>
        <h4 className='text-center text-brand mb-5'>Our Doctors</h4>
        <div className='row'>
          <Doctor />
          <Doctor />
          <Doctor />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
