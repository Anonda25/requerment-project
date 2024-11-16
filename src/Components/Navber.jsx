import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './NavberStyle.css'

const Navber = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
    return (
      <div className="px-20 py-3 flex justify-between items-center bg-sky-600">
        <div>{user.name}</div>
        <div className="text-xl space-x-4 font-semibold text-white">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allTreatments"}>All Treatments</NavLink>
          <NavLink to={"/myappoinment"}>My appointments</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
        <div>
          <NavLink to={'/login'}>
            <button className="btn btn-primary rounded-none">Login</button>
          </NavLink>
        </div>
      </div>
    );
};

export default Navber;