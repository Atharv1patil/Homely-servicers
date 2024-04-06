import "../styles/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";

function ViewUser() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "1"
    ) {
      window.location.href = "/login";
    }
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    // const response = await axios.get("http://localhost:8080/api/getUser");
    const user = { roleId: 3 };
    const response = await axios.post(
      "http://localhost:8080/api/getUserByRoleId",
      user
    );
    setUserList(response.data);
    console.log(response.data);
  };

  const myfun = async (userEmail) => {
    console.log(">>>>>" + userEmail);
    const user = { email: userEmail };
    const res = await axios.post("http://localhost:8080/api/getUserByEmail", user);
    console.log(res.data);
    if (res.data.status==="Active") {
      const user1 = {
        userid: res.data.userid,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        address: res.data.address,
        password: res.data.password,
        roleId: res.data.roleId,
        status: "InActive",
      };
      console.log(user1);
      const user2 = await axios.put("http://localhost:8080/api/updateUser", user1);
      sweetalert("success", " User blocked Successsfully...", "success");
    } else {
      const user1 = {
        userid: res.data.userid,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        address: res.data.address,
        password: res.data.password,
        roleId: res.data.roleId,
        status: "Active",
      };
      const user2 = await axios.put("http://localhost:8080/api/updateUser", user1);
    }

    sweetalert("success", "Status updated successfully...", "success");

    getAllUsers();
  };

  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">User List</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <td>User Id</td>
              <td>User Name</td>
              <td>User Email Id</td>
              <td>User Mobile</td>
              <td>User Address</td>
              <td>User Status</td>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr className=" text-light size">
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.address}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => {
                        myfun(user.email);
                      }}
                      className="btn btn-success mb-4"
                      value={user.status}
                    />
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewUser;
