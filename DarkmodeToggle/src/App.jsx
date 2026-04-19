import { useEffect } from "react";
import { useState } from "react";

export default function App() {

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved == 'true';
  });

  useEffect(() => {
    localStorage.setItem("theme", dark);
  }, [dark]);



  return (
    <div
    style={{
      height: "100vh",
      background: dark? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() =>
        setDark(!dark)
      }>Toggle Mode</button>
    </div>
  )
}

