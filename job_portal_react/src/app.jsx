import React, { useState } from "react";
import "./app.css";

function App() {
  const [jobInput, setJobInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [resumeMsg, setResumeMsg] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const jobsData = [
    {
      title: "Software Engineer",
      company: "TechNova Solutions",
      location: "bengaluru",
      exp: "Fresher",
    },
    {
      title: "Digital Marketing",
      company: "GrowthWave",
      location: "delhi",
      exp: "1-2 Years",
    },
    {
      title: "Accounts Assistant",
      company: "FinEdge Pvt Ltd",
      location: "mumbai",
      exp: "0-1 Year",
    },
    {
      title: "HR Executive",
      company: "PeopleFirst",
      location: "pune",
      exp: "Fresher",
    },
  ];

  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const applyJob = () => {
    alert("Application Submitted Successfully!");
  };

  const searchJobs = () => {
    const job = jobInput.toLowerCase();
    const location = locationInput.toLowerCase();

    const filtered = jobsData.filter(
      (j) =>
        (j.title.toLowerCase().includes(job) || job === "") &&
        (j.location.includes(location) || location === ""),
    );

    setFilteredJobs(filtered);
  };

  const uploadResume = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select a file");
      return;
    }
    setResumeMsg("Resume uploaded successfully!");
  };

  const login = () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
      setLoginMsg("Login Successful!");
    } else {
      setLoginMsg("Invalid Username or Password");
    }
  };

  return (
    <>
      <header>
        <h1>JobFinder</h1>
        <p>Your trusted job search platform</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Job title"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
          <button onClick={searchJobs}>Search</button>
        </div>
      </header>

      <nav>
        <a onClick={() => scrollToSection("jobs")}>Jobs</a>
        <a onClick={() => scrollToSection("companies")}>Companies</a>
        <a onClick={() => scrollToSection("resume")}>Post Resume</a>
        <a onClick={() => scrollToSection("login")}>Login</a>
      </nav>

      <section id="jobs">
        <h2>Featured Jobs</h2>

        <div className="jobs-container">
          {filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-title">{job.title}</div>
              {job.company}
              <br />
              {job.location}
              <br />
              {job.exp}
              <br />
              <br />
              <button onClick={applyJob}>Apply</button>
            </div>
          ))}
        </div>
      </section>

      <section id="companies">
        <h2>Top Companies</h2>

        <div className="companies">
          <div>TechNova</div>
          <div>GrowthWave</div>
          <div>FinEdge</div>
          <div>PeopleFirst</div>
        </div>
      </section>

      <section id="resume">
        <h2>Upload Resume</h2>

        <input type="file" onChange={uploadResume} />
        <br />
        <br />

        <p>{resumeMsg}</p>
      </section>

      <section id="login">
        <h2>Login</h2>

        <div className="login-box">
          <input type="text" id="username" placeholder="Username" />
          <br />
          <br />

          <input type="password" id="password" placeholder="Password" />
          <br />
          <br />

          <button onClick={login}>Login</button>

          <p>{loginMsg}</p>
        </div>
      </section>

      <footer>© 2026 JobFinder Portal</footer>
    </>
  );
}

export default App;
