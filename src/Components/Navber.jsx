import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './NavberStyle.css'
import bannerImg from '../assets/Logo.webp'
const Navber = () => {
  const { user, userSignOut } = useContext(AuthContext);
  console.log(user);

  const heandleLogOut=()=>{
    userSignOut()
  }
  
    return (
      <div className="px-20 py-3 flex justify-between items-center bg-neutral-content sticky top-0 z-10 backdrop-blur-lg
      ">
        <div className="text-xl font-semibold text-white">

          <img src={bannerImg} alt="" className="w-20 h-20 rounded-full" />
        </div>
        <div className="text-xl space-x-4 font-semibold text-white">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allTreatments"}>All Treatments</NavLink>
          <NavLink to={"/myappoinment"}>My appointments</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl font-semibold text-white">{user?.email}</p>
          {user && user ? (
            <button
              onClick={heandleLogOut}
              className="btn btn-primary rounded-none"
            >
              LogOut
            </button>
          ) : (
            <div>
              <NavLink to={"/login"}>
                <button className="btn btn-primary rounded-none">Login</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navber;