import { useEffect, useState } from 'react';
import './Dashboard.css'; // This path must match the actual file location

export default function Dashboard() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then(res => res.json())
      .then(data => setSkills(data.filter(skill => skill.owner === 'me')));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/skills/${id}`, {
      method: 'DELETE',
    }).then(() => setSkills(skills.filter(skill => skill.id !== id)));
  }

  function handleFavorite(id, currentFavorite) {
    fetch(`http://localhost:3000/skills/${id}`, {
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