# SkillSwap

**Phase 2 Project – React & JSON Server**  
A single-page React application that enables users in a local community to offer, browse, and request skills. Users can filter by location or skill level, add their own skills, and manage them via a personal dashboard.

---

##  Project Overview

**SkillSwap** is built using React and styled with Tailwind CSS. It uses `react-router-dom` for navigation and `JSON Server` as a mock backend to support full CRUD (Create, Read, Update, Delete) operations.

---

##  Learning Goals

- Build a multi-component React SPA.
- Navigate between views using `react-router-dom`.
- Manage application state using hooks (`useState`, `useEffect`).
- Implement controlled forms and submit data to a backend.
- Perform GET, POST, PATCH, and DELETE requests using `fetch`.
- Structure an app using reusable components.
- Apply responsive design using Tailwind CSS.

---

##  Features

-  **View All Skills** – Browse all available skills posted by users.
-  **Add a New Skill** – Submit a new skill listing using a controlled form.
-  **View Skill Details** – View full details of any skill on its own page.
-  **Filter by Location / Skill Level** – Narrow down results to specific areas or expertise levels.
-  **Mark Skills as Favorite** – Save skills for later reference.# SkillSwap

**Phase 2 Project – React & JSON Server**  
A single-page React application that enables users in a local community to offer, browse, and request skills. Users can filter by location or skill level, add their own skills, and manage them via a personal dashboard.

---

## Project Overview

**SkillSwap** is built using React and styled with Tailwind CSS. It uses `react-router-dom` for navigation and `JSON Server` as a mock backend to support full CRUD (Create, Read, Update, Delete) operations.

---**Frontend:**  
`https://skill-swap-f53d.onrender.com/`

**Backend (example endpoint):**  
` https://skill-swap-backend-p1ra.onrender.com/`

---


## Learning Goals

- Build a multi-component React SPA.
- Navigate between views using `react-router-dom`.
- Manage application state using hooks (`useState`, `useEffect`).
- Implement controlled forms and submit data to a backend.
- Perform GET, POST, PATCH, and DELETE requests using `fetch`.
- Structure an app using reusable components.
- Apply responsive design using Tailwind CSS.

---

##  Features

-  **View All Skills** – Browse all available skills posted by users.
-  **Add a New Skill** – Submit a new skill listing using a controlled form.
-  **View Skill Details** – View full details of any skill on its own page.
-  **Filter by Location / Skill Level** – Narrow down results to specific areas or expertise levels.
-  **Mark Skills as Favorite** – Save skills for later reference.
-  **User Dashboard** – View and manage your added skills.
-  **Responsive Design** – Fully styled using Tailwind CSS for mobile-first design.

---

##  Component Architecture

| Component        | Responsibility                                       |
|------------------|--------------------------------------------------------|
| `App.jsx`        | Root component. Sets up routing using `react-router-dom`. |
| `Navbar`         | Navigation menu with links to all routes.             |
| `SkillList`      | Fetches and displays all skills from the backend.     |
| `SkillDetail`    | Shows details of a selected skill.                    |
| `AddSkillForm`   | Controlled form to add a new skill.                   |
| `Dashboard`      | Displays all skills added by the current user.        |
| `SkillCard`      | Reusable UI component to display a skill summary.     |

---

## Backend Setup

The app uses `JSON Server` to simulate a RESTful API.

### Setup Instructions:

1. Navigate to the project root.
2. Run the JSON Server:

```bash
json-server --watch db.json --port 3001
```

### Supported Routes:

- `GET /skills` – Get all skills
- `POST /skills` – Add new skill
- `PATCH /skills/:id` – Update a skill (e.g., mark as favorite)
- `DELETE /skills/:id` – Remove a skill

---

##  Team Roles

### **1. Jared Kiprop**
- Set up `react-router-dom` and all routes:
  - `/` → Home
  - `/skills` → SkillList
  - `/skills/:id` → SkillDetail
  - `/add-skill` → AddSkillForm
  - `/dashboard` → Dashboard

### **2. Nimrod Kipngetich**
- Fetching, displaying, updating, and deleting data
- Created:
  - `SkillList` component
  - `SkillDetail` component
  - `Dashboard` component
- Implemented `PATCH` logic

### **3. Arnold Maina**
- Set up `JSON Server` (`db.json`)
- Built `AddSkillForm`
- Handled shared fetch logic (`useEffect`, `useState`)
- Styled the app using Tailwind CSS
- Implemented login and register functionality

---

##  Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SkillList.jsx
│   ├── SkillDetail.jsx
│   ├── AddSkillForm.jsx
│   ├── Dashboard.jsx
│   ├── SkillCard.jsx
├── App.jsx
├── index.js
db.json
```

---

##  Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start React app:

```bash
npm start
```

4. In a separate terminal, run JSON Server:

```bash
json-server --watch db.json --port 3001
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser
---

##  License

This project is for educational purposes and follows the curriculum of Phase 2 at [Your School Name or Program Name].
-  **User Dashboard** – View and manage your added skills.
-  **Responsive Design** – Fully styled using Tailwind CSS for mobile-first design.

---

##  Component Architecture

| Component        | Responsibility                                       |
|------------------|--------------------------------------------------------|
| `App.jsx`        | Root component. Sets up routing using `react-router-dom`. |
| `Navbar`         | Navigation menu with links to all routes.             |
| `SkillList`      | Fetches and displays all skills from the backend.     |
| `SkillDetail`    | Shows details of a selected skill.                    |
| `AddSkillForm`   | Controlled form to add a new skill.                   |
| `Dashboard`      | Displays all skills added by the current user.        |
| `SkillCard`      | Reusable UI component to display a skill summary.     |

---

##  Backend Setup

The app uses `JSON Server` to simulate a RESTful API.

### Setup Instructions:

1. Navigate to the project root.
2. Run the JSON Server:

```bash
json-server --watch db.json --port 3001
```

### Supported Routes:

- `GET /skills` – Get all skills
- `POST /skills` – Add new skill
- `PATCH /skills/:id` – Update a skill (e.g., mark as favorite)
- `DELETE /skills/:id` – Remove a skill

---

##  Team Roles

### **1. Jared Kiprop**
- Set up `react-router-dom` and all routes:
  - `/` → Home
  - `/skills` → SkillList
  - `/skills/:id` → SkillDetail
  - `/add-skill` → AddSkillForm
  - `/dashboard` → Dashboard

### **2. Nimrod Kipngetich**
- Fetching, displaying, updating, and deleting data
- Created:
  - `SkillList` component
  - `SkillDetail` component
  - `Dashboard` component
- Implemented `PATCH` logic

### **3. Arnold Maina**
- Set up `JSON Server` (`db.json`)
- Built `AddSkillForm`
- Handled shared fetch logic (`useEffect`, `useState`)
- Styled the app using Tailwind CSS
- Implemented login and register functionality

---

##  Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SkillList.jsx
│   ├── SkillDetail.jsx
│   ├── AddSkillForm.jsx
│   ├── Dashboard.jsx
│   ├── SkillCard.jsx
├── App.jsx
├── index.js
db.json
```

---

##  Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start React app:

```bash
npm start
```

4. In a separate terminal, run JSON Server:

```bash
json-server --watch db.json --port 3001
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
---
## Authors

Anorld
Jared
Nimrod

##  License

This project is for educational purposes and follows the curriculum of Phase 2 at [Moringa school].