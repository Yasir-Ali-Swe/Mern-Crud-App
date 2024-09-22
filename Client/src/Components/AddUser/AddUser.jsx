import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const AddUser = () => {
  // const navigate = useNavigate();
  const User = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(User);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(user);
  };
  const submitFormData = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8000/api/create", user);
      // console.log(response);
      toast.success("User Add Successfully", { position: "top-right" });
      setUser(User);
      // navigate("/");
    } catch (error) {
      Console.log("Error Occurred => ", error);
    }
  };
  return (
    <div className="AddUser">
      <Link to={"/"} className="BackBtn">
        Back
      </Link>
      <form className="AddUserForm" onSubmit={submitFormData}>
        <input
          type="text"
          name="fname"
          onChange={handleInput}
          value={user.fname}
          placeholder="FirstName"
        />
        <input
          type="text"
          name="lname"
          onChange={handleInput}
          value={user.lname}
          placeholder="LastName"
        />
        <input
          type="text"
          name="email"
          onChange={handleInput}
          value={user.email}
          placeholder="Email"
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <button className="AddBtn">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
