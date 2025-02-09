import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
  });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.department) {
      setError("All fields are required.");
      return;
    }

    try {
      if (editing) {
        await axios.put(`${API_URL}/${formData.id}`, formData);
        setUsers(
          users.map((user) => (user.id === formData.id ? formData : user))
        );
      } else {
        const response = await axios.post(API_URL, formData);
        setUsers([...users, { ...formData, id: response.data.id }]);
      }
      setEditing(false);
      setFormData({ id: "", name: "", email: "", department: "" });
      setError("");
    } catch (err) {
      setError("Failed to submit data.");
    }
  };

  const handleEdit = (user) => {
    setEditing(true);
    setFormData(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="container w-4/5 m-auto text-center">
      <h1 className="p-4 text-[#2BAAE2] font-extrabold text-2xl font-mono">
        Ajackus Management
      </h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="my-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="m-[6px] p-2 w-52 border border-gray-600 rounded-md focus:border-[#2BAAE2]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="m-[6px] p-2 w-52 border border-gray-600 rounded-md focus:border-[#2BAAE2]"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
          className="m-[6px] p-2 w-52 border border-gray-600 rounded-md focus:border-[#2BAAE2]"
        />
        <button
          className="bg-[#2BAAE2] text-white p-2 w-40 rounded-lg text-xl font-semibold hover:opacity-80 transition-all duration-500 ease-in-out"
          type="submit"
        >
          {editing ? "Update" : "Add"} User
        </button>
      </form>

      <table className="user-table border  border-collapse border-[#2BAAE2] w-full">
        <thead>
          <tr>
            <th className="p-2 border border-[#2baae2]">ID</th>
            <th className="p-2 border border-[#2baae2]">Name</th>
            <th className="p-2 border border-[#2baae2]">Email</th>
            <th className="p-2 border border-[#2baae2]">Department</th>
            <th className="p-2 border border-[#2baae2]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2 border border-[#2baae2] font-bold">
                {user.id}
              </td>
              <td className="p-2 border border-[#2baae2] font-bold">
                {user.name}
              </td>
              <td className="p-2 border border-[#2baae2] font-bold">
                {user.email}
              </td>
              <td className="p-2 border border-[#2baae2] font-bold">
                {user.department || "N/A"}
              </td>
              <td className="p-2 border border-[#2baae2]">
                <button
                  className="bg-[#2baae2] text-white border-none py-1 px-4 font-semibold rounded-md cursor-pointer mr-1 hover:opacity-80 transition-all duration-500 ease-in-out"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white border-none py-1 px-4 font-semibold rounded-md cursor-pointer mr-1 hover:opacity-80 transition-all duration-500 ease-in-out"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
