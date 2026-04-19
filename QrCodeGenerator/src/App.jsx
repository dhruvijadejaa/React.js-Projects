import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Generate QR Code
  useEffect(() => {
    if (word) {
      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          word
        )}&size=${size}x${size}&bgcolor=${bgColor}`
      );
    }
  }, [word, size, bgColor]);

  // Button click
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>

      {/* Input + Button */}
      <input
        type="text"
        placeholder="Enter text"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={handleClick}>Generate</button>

      {/* Color Picker */}
      <div>
        <p>Background Color</p>
        <input
          type="color"
          onChange={(e) => setBgColor(e.target.value.substring(1))}
        />
      </div>

      {/* Size Slider */}
      <div>
        <p>Size: {size}px</p>
        <input
          type="range"
          min="200"
          max="600"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      {/* Output */}
      <div>
        {qrCode && <img src={qrCode} alt="QR Code" />}
      </div>

      {/* Download */}
      {qrCode && (
        <a href={qrCode} download="QRCode">
          <button>Download</button>
        </a>
      )}
    </div>
  );
}

export default App;