import React, { useEffect, useState } from "react";
import "./UpdateUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialUser = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getOne/${id}`
        );
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.log("Error Occurred -> ", error);
      }
    };
    fetchUserData();
  }, [id]);
  const handlleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const submitFormData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/api/updateOne/${id}`,
        user
      );
      toast.success("User Updated Successfully", { position: "top-right" });
      setUser(initialUser);
      navigate("/");
      // console.log(response);
    } catch (error) {
      console.log("Error Occurred -> ", error);
    }
  };
  return (
    <div className="UpdateUser">
      <Link to={"/"} className="BackBtn">
        Back
      </Link>
      <form className="UpdateUserForm" onSubmit={submitFormData}>
        <input
          type="text"
          name="fname"
          value={user.fname}
          placeholder="FirstName"
          onChange={handlleInputChange}
        />
        <input
          type="text"
          name="lname"
          value={user.lname}
          placeholder="LastName"
          onChange={handlleInputChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handlleInputChange}
        />
        <button className="UpdateBtn">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
