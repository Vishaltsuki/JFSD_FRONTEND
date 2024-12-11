import React, { useState } from "react";
import axios from "axios";

const Review = () => {
  const [file, setFile] = useState(null);
  const [studentId, setStudentId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [marks, setMarks] = useState("");
  const [message, setMessage] = useState("");

  // Handle file upload
  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file || !studentId) {
      setMessage("Please provide both a file and student ID.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("studentId", studentId);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/assignments/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading file. Please try again.");
    }
  };

  // Handle marks assignment
  const handleMarksAssignment = async (e) => {
    e.preventDefault();
    if (!assignmentId || !marks) {
      setMessage("Please provide both assignment ID and marks.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/assignments/review",
        { assignmentId, marks },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error assigning marks. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Assignment Manager</h1>

      {/* File Upload Form */}
      <form onSubmit={handleFileUpload}>
        <h3>Upload Assignment</h3>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ marginBottom: "10px", display: "block" }}
        />
        <button type="submit">Upload</button>
      </form>

      {/* Marks Assignment Form */}
      <form onSubmit={handleMarksAssignment} style={{ marginTop: "20px" }}>
        <h3>Assign Marks</h3>
        <input
          type="text"
          placeholder="Assignment ID"
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
          style={{ marginBottom: "10px", display: "block" }}
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          style={{ marginBottom: "10px", display: "block" }}
        />
        <button type="submit">Assign Marks</button>
      </form>

      {/* Display Message */}
      {message && <p style={{ marginTop: "20px", color: "blue" }}>{message}</p>}
    </div>
  );
};

export default Review;