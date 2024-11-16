import React from 'react';
import Banner from '../Components/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServisesData from '../Components/ServisesData';
import Feedback from '../Components/Feedback';

const Home = () => {
    const servies = useLoaderData()
    const {servicesData, feedBackData}= servies;
    console.log(servicesData, feedBackData);
    return (
      <div>
        <Banner></Banner>
        <div className="grid gap-6 lg:grid-cols-4">
          {servicesData.slice(0,4).map((secvise, ind) => (
            <ServisesData key={ind} secvise={secvise}></ServisesData>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <NavLink to={"/allTreatments"}>
            <button className="btn btn-primary ">Show All teatment</button>
          </NavLink>
        </div>
        <div className="mb-10">
          <Feedback feedBackData={feedBackData}></Feedback>
        </div>
      </div>
    );
};

export default Home;