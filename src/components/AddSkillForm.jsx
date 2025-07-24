import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSkillForm.css'; // This path must match the actual file location

export default function AddSkillForm() {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    location: '',
    description: '',
    owner: 'me',
    favorite: false,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
   const API_URL = import.meta.env.VITE_API_URL;
fetch(`${API_URL}/skills` , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => navigate('/skills'));
  }
 
  return (
    <div className='formwrapper'>
    <form onSubmit={handleSubmit} className="addskill bg-white shadow-lg p-6 rounded-lg max-w-xl mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Skill</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Skill Name"
        className="hehe"
      />
      <input
        name="level"
        value={formData.level}
        onChange={handleChange}
        placeholder="Skill Level"
        className="hehe"
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="hehe"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="hehe"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 init"
      >
        Add Skill
      </button>
    </form>
    </div>
  );
}