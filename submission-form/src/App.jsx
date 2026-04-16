import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");

  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false
  });

  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  // Reset
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false
    });
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about
    });
  };

  // Checkbox handler
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  return (
    <div className="App">
      <h1>Form in React</h1>

      <fieldset>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div>
            <label>Gender</label>

            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male

            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female

            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </div>

          <div>
            <label>Your best subject</label>

            <input
              type="checkbox"
              checked={subjects.english}
              onChange={() => handleSubjectChange("english")}
            />
            English

            <input
              type="checkbox"
              checked={subjects.maths}
              onChange={() => handleSubjectChange("maths")}
            />
            Maths

            <input
              type="checkbox"
              checked={subjects.physics}
              onChange={() => handleSubjectChange("physics")}
            />
            Physics
          </div>

          <div>
            <label htmlFor="file">Upload Resume</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </div>

          <div>
            <label htmlFor="url">Enter URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div>
            <label>Select your choice</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select your answer</option>

              <optgroup label="Beginners">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>

              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <div>
            <button type="button" onClick={handleReset}>
              Reset
            </button>

            <button type="submit">
              Submit
            </button>
          </div>

        </form>
      </fieldset>
    </div>
  );
}

export default App;