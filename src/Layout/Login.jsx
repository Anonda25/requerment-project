import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { UserLogin } = useContext(AuthContext);

  const [login , setLogin ]= useState(false)
  const heandleLogin = (e) => {
    e.preventDefault();
    setLogin(false)
    const email = e.target.email.value;
    const password = e.target.password.value;
    UserLogin(email, password)
      .then((result) => {
        setLogin(true)
        console.log("success login", result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-2/4 mx-auto shadow-2xl mb-20">
      <form onSubmit={heandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          {login && login ? (
            <Navigate to={'/'}></Navigate>
          ) : (
            <button className="btn btn-primary">Login</button>
          )}
        </div>
        <p className="capitalize">
          Your are a new user please !!😶{" "}
          <Link
            className="text-xl text-red-400 underline font-bold"
            to={"/register"}
          >
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
