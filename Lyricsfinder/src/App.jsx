import { useState } from "react";
import Axios from "axios";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  const searchLyrics = async () => {
    if (!artist.trim() || !song.trim()) return;

    try {
      const res = await Axios.get(
        `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`
      );

      setLyrics(res.data?.lyrics || "Lyrics not found");
    } catch (error) {
      console.error(error);
      setLyrics("Error fetching lyrics");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={searchLyrics}>Search Lyrics</button>

      <pre>{lyrics}</pre>
    </div>
  );
}

export default App;