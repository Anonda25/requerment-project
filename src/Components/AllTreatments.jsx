import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServisesData from './ServisesData';

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="grid gap-6 grid-cols-4 w-[80%] mx-auto max-w-[1200px] mt-6">
      {services.map((secvise) => (
        <ServisesData secvise={secvise}></ServisesData>
      ))}
    </div>
  );
};

export default AllTreatments;