import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import Footer from '../Page/Footer';

const MainLayout = () => {
    return (
      <div>
        <Navber></Navber>
        <div className="w-[80%] mx-auto max-w-[1200px]  mt-6">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;