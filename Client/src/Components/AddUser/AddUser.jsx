import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";
const AddUser = () => {
  return (
    <div className="AddUser">
      <Link to={"/"} className="BackBtn">
        Back
      </Link>
      <form className="AddUserForm">
        <input type="text" name="fname" placeholder="FirstName" />
        <input type="text" name="lname" placeholder="LastName" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button className="AddBtn">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
