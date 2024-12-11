import React, { useState } from "react";

const degrees = [
  {
    name: "Accounting",
    satisfaction: "Medium",
    salary: 76000,
    icon: "📊",
    description: "Learn financial management, auditing, and more.",
  },
  {
    name: "Acting",
    satisfaction: "N/A",
    salary: 45000,
    icon: "🎭",
    description: "Develop skills for theater, film, and TV performances.",
  },
  {
    name: "Computer Science",
    satisfaction: "High",
    salary: 100000,
    icon: "💻",
    description: "Focus on programming, algorithms, and AI.",
  },
  {
    name: "Nursing",
    satisfaction: "Very High",
    salary: 85000,
    icon: "🩺",
    description: "Prepare for a career in healthcare and patient care.",
  },
];

const Degrees = () => {
  const [filteredDegrees, setFilteredDegrees] = useState(degrees);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filterByIconType = (type) => {
    const filtered = degrees.filter((degree) => degree.icon === type);
    setFilteredDegrees(filtered);
  };

  const sortBySatisfaction = () => {
    const sorted = [...filteredDegrees].sort((a, b) =>
      a.satisfaction.localeCompare(b.satisfaction)
    );
    setFilteredDegrees(sorted);
  };

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      filteredDegrees
        .map(
          (d) =>
            `${d.name},${d.satisfaction},${d.salary},${d.icon},${d.description}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "degrees.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleView = (viewType) => {
    alert(`Toggled to ${viewType} view.`);
  };

  const compareDegrees = () => {
    alert("Compare feature under construction.");
  };

  const resetFilters = () => {
    setFilteredDegrees(degrees);
  };

  const styles = {
    button: {
      cursor: "pointer",
      padding: "10px",
      backgroundColor: "#007BFF",
      color: "white",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
      margin: "5px",
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <div>
        <h1>Degree Options</h1>
        <button style={styles.button} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <button style={styles.button} onClick={() => filterByIconType("📊")}>
          Show Finance Degrees
        </button>
        <button style={styles.button} onClick={() => filterByIconType("💻")}>
          Show Tech Degrees
        </button>
        <button style={styles.button} onClick={sortBySatisfaction}>
          Sort by Satisfaction
        </button>
        <button style={styles.button} onClick={downloadCSV}>
          Download CSV
        </button>
        <button style={styles.button} onClick={() => toggleView("list")}>
          List View
        </button>
        <button style={styles.button} onClick={() => toggleView("grid")}>
          Grid View
        </button>
        <button style={styles.button} onClick={compareDegrees}>
          Compare Two Degrees
        </button>
        <button style={styles.button} onClick={resetFilters}>
          Reset
        </button>
      </div>
      <div>
        {filteredDegrees.map((degree, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              borderRadius: "4px",
              backgroundColor: theme === "dark" ? "#444" : "#f9f9f9",
            }}
          >
            <div>{degree.icon}</div>
            <div>{degree.name}</div>
            <div>{degree.satisfaction}</div>
            <div>${degree.salary}</div>
            <div>{degree.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Degrees;
