import { useEffect, useState } from 'react';
import SkillCard from './SkillCard';
import './SkillList.css'; // This path must match the actual file location
export default function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
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