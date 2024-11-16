import React from 'react';
import { NavLink } from 'react-router-dom';

const ServisesData = ({ secvise }) => {
    console.log(secvise);
    const { treatment, description, image, cost ,id} = secvise;
  return (
    <div className="bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{treatment}</h2>
        <h2>Teatment Cost : {cost}</h2>
        <p title={description}>{description.slice(0, 100)}</p>
        <div className="card-actions">
          <NavLink to={`/about/${id}`}>
            <button className="badge badge-outline p-4 bg-primary text-white font-bold">
              Checkout More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServisesData;

//  <div className="card bg-base-100 shadow-xl">
//    <figure>
//      <img src={image} alt="Shoes" />
//    </figure>
//    <div className="card-body">
//      <h2 className="card-title">
//        {treatment}
//        <div className="badge badge-secondary">$ {cost}</div>
//      </h2>
//      <p title={description}>{description.slice(0, 100)}...</p>
//      <div className="card-actions justify-end">
//        <NavLink to={`/details/${id}`}>
//          <button className="badge badge-outline p-4 bg-primary text-white font-bold">
//            Checkout More
//          </button>
//        </NavLink>
//      </div>
//    </div>
//  </div>;