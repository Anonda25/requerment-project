// import React, { useContext } from "react";
// import { authContext } from "../AuthProvider/AuthProvider";
// First Name
// Last Name
// Email(Logged in user’s email)
// Phone number.
// Appointment date.
// Address.
// “Make Appointment” button.

const Modal = ({ treatment }) => {
//   const { user } = useContext(authContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     const fname = e.target.Fname.value;
//     const lname = e.target.Lname.value;
//     const email = e.target.email.value;
//     const info = {
//       fname,
//       lname,
//       email,
//       treatment,
//     };
//     let saveData = [];
//     const localData = localStorage.getItem("appoinments");
//     if (localData) {
//       saveData = JSON.parse(localData);
//     }
//     saveData.push(info);
//     localStorage.setItem("appoinments", JSON.stringify(saveData));
//   };
  return (
    <div>
      <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form action="">
              <div>
                First Name
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="Fname"
                />
              </div>
              <div>
                Last Name
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="Lname"
                />
              </div>

              <div>
                Email
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="email"
                />
              </div>
              <div>
                Phone Number
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="phone"
                />
              </div>
              <div>
                Appointment date
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full "
                  name="date"
                />
              </div>
              <div>
                Address
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="address"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Make Appoinment
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">please fil the from !!</h3>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Frist Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your Frist Name"
                    className="input input-bordered"
                    name="FristName"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lest Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Lest Name"
                    className="input input-bordered"
                    required
                    name="LestName"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="input input-bordered"
                    required
                    name="PHoneNumber"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Appointment date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ypur Address"
                    className="input input-bordered"
                    required
                  />
                </div>
               
                <div className="form-control mt-6">
                  <button className="btn btn-primary">MY Appoiment</button>
                </div>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Modal;
