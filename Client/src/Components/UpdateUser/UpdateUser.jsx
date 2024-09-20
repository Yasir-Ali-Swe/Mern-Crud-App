import React from "react";
import "./UpdateUser.css";
import { Link } from "react-router-dom";
const UpdateUser = () => {
  return (
    <div className="UpdateUser">
      <Link to={"/"} className="BackBtn">
        Back
      </Link>
      <form className="UpdateUserForm">
        <input type="text" name="fname" placeholder="FirstName" />
        <input type="text" name="lname" placeholder="LastName" />
        <input type="text" name="email" placeholder="Email" />
        <button className="UpdateBtn">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
