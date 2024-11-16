
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  const {UserRegister} = useContext(AuthContext)
 
     const heandleRegister = (e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if(password.length < 9){
        alert('please enter 6 ')
      }
      const photoUrl = e.target.photoUrl.value;
      const Name = e.target.name.value;
      UserRegister(email, password, photoUrl, Name)
      .then(result =>{
        console.log('success', result.user);
      })
      .catch(error=>{
        console.log('ERROR', error.message);
      })
     }
    return (
      <div className="card bg-base-100 w-2/4 mx-auto shadow-2xl mb-20">
        <form onSubmit={heandleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered capitalize"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text capitalize">Photo Url</span>
            </label>
            <input
              type="url"
              placeholder="Added your Url"
              name="photoUrl"
              className="input input-bordered capitalize"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register Now</button>
          </div>
          <p className="capitalize">
            Your are a new user please{" "}
            <Link className="underline text-green-500" to={"/login"}>
              login
            </Link>
          </p>
        </form>
      </div>
    );
};

export default Register;