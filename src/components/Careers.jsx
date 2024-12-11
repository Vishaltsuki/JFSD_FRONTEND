import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    resume: null,
    role: "",
  });

  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
    setSelectedRole(null);
    setFormVisible(false);
  };

  const handleApplyNow = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
    setFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormVisible(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      education: "",
      resume: null,
      role: "",
    });
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    dropdown: {
      marginBottom: "20px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      cursor: "pointer",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    form: {
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    formButton: {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Careers</h1>
      <select
        style={styles.dropdown}
        onChange={handleSpecializationChange}
        value={selectedSpecialization}
      >
        <option value="">Select a Specialization</option>
        {[
          { name: "Engineering" },
          { name: "Medicine" },
          { name: "Business" },
          { name: "Arts" },
        ].map((spec, index) => (
          <option key={index} value={spec.name}>
            {spec.name}
          </option>
        ))}
      </select>

      {selectedSpecialization && (
        <div style={styles.cardGrid}>
          {[
            "Software Developer",
            "Civil Engineer",
            "Mechanical Engineer",
            "Electrical Engineer",
            "Data Scientist",
          ].map((role, index) => (
            <div key={index} style={styles.card}>
              <h3>{role}</h3>
              <button
                style={styles.button}
                onClick={() => handleApplyNow(role)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}

      {formVisible && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Experience (in years):</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Education Qualification:</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Upload Resume:</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              style={styles.formInput}
              required
            />
          </div>
          <button type="submit" style={styles.formButton}>
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default Careers;