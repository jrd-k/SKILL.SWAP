import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SkillDetail() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/skills/${id}`)
      .then(res => res.json())
      .then(data => setSkill(data));
  }, [id]);

  if (!skill) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{skill.name}</h2>
      <p>Level: {skill.level}</p>
      <p>Location: {skill.location}</p>
      <p>Description: {skill.description}</p>
    </div>
  );
}
