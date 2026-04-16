import React, { useState } from "react";

function App(){
  const[joke, setJoke] = useState("");
  const fetchAPI = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => setJoke(data.joke));
  };
  return(
    <div className="App">
      <h1>Joke Generator Using React and Joke API</h1>
      <button onClick={fetchAPI}>click to generate a joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
