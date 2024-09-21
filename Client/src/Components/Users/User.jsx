import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";
const User = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getAll");
        setUser(response.data);
      } catch (error) {
        console.log("Error occurred => ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="UserTable">
      <Link to={"/add"} className="AddBtn">
        Add User
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{`${user.fname} ${user.lname}`}</td>
                <td>{user.email}</td>
                <td>
                  {" "}
                  <button>Delete</button>
                  <Link to={`./update/${user._id}`} className="UpdateBtn">
                    Update
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
