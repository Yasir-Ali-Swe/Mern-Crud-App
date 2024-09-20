import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = () => {
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
          <tr>
            <td>1</td>
            <td>Yasir Ali</td>
            <td>yasir@gmail.com</td>
            <td>
              <button>Delete</button>
              <Link to={"./update"} className="UpdateBtn">
                Update
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
