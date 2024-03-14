import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleWindowClose = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, [unsavedChanges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4();
    const userData = { ...formData, id: userId };
    localStorage.setItem("userData", JSON.stringify(userData));
    setUnsavedChanges(false);
    setFormData({
      id: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    alert("Data saved successfully!");
  };

  return (
    <div className="container_form">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      {unsavedChanges && (
        <p className="unsavedChanges">You have unsaved changes!</p>
      )}
    </div>
  );
};

export default UserDataForm;
