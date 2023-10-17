import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const Users = () => {
  const { userSignOut } = useAuth();
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("User has been deleted!", {
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              userSignOut();
            }
          });
      } else {
        swal("User deletion has been cancelled!");
      }
    });
  };
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 2 */}
            {users &&
              users?.map((user, idx) => (
                <tr key={user._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>Purple</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
