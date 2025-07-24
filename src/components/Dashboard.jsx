import { useEffect, useState } from 'react';
import './Dashboard.css'; // Make sure this path is correct

export default function Dashboard() {
  const [skills, setSkills] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL; // Defined once

  useEffect(() => {
    fetch(`${API_URL}/skills`)
      .then(res => res.json())
      .then(data => setSkills(data.filter(skill => skill.owner === 'me')));
  }, []);

  function handleDelete(id) {
    fetch(`${API_URL}/skills/${id}`, {
      method: 'DELETE',
    }).then(() => setSkills(skills.filter(skill => skill.id !== id)));
  }

  function handleFavorite(id, currentFavorite) {
    fetch(`${API_URL}/skills/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorite: !currentFavorite }),
    }).then(() =>
      setSkills(skills.map(s =>
        s.id === id ? { ...s, favorite: !currentFavorite } : s
      ))
    );
  }

  return (
    <div className="dash p-4">
      <h2 className="text-xl font-bold mb-4">Your Skills</h2>
      {skills.map(skill => (
        <div key={skill.id} className="border p-2 mb-2">
          <h3 className="text-lg">{skill.name}</h3>
          <button onClick={() => handleFavorite(skill.id, skill.favorite)}>
            {skill.favorite ? '★ Unfavorite' : '☆ Favorite'}
          </button>
          <button
            onClick={() => handleDelete(skill.id)}
            className="ml-2 text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
