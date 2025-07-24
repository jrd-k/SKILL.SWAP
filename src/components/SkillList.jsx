import { useEffect, useState } from 'react';
import SkillCard from './skillCard.jsx';
import './SkillList.css';

const API_URL = import.meta.env.VITE_API_URL;

export default function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/skills`)
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div className="skills grid grid-cols-2 gap-4 p-4">
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
