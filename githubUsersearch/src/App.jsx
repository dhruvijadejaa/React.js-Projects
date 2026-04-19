import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/search/users?q=${debouncedQuery}`
        );
        setUsers(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}