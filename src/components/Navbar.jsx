import { Link } from 'react-router-dom';
import './Navbar.css'; // This path must match the actual file location

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"className='navlink'>Home</Link>
      <Link to="/skills"className='navlink'>Skills</Link>
      <Link to="/add-skill"className='navlink'>Add Skill</Link>
      <Link to="/dashboard"className='navlink'>Dashboard</Link>
    </nav>
  );
}

