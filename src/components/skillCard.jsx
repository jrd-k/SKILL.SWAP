import { Link } from 'react-router-dom';

export default function SkillCard({ skill }) {
  return (
    <div className="border p-4 shadow rounded">
      <h2 className="text-lg font-bold">{skill.name}</h2>
      <p>Level: {skill.level}</p>
      <p>Location: {skill.location}</p>
      <Link to={`/skills/${skill.id}`} className="text-blue-600 underline">
        View Details
      </Link>
    </div>
  );
}