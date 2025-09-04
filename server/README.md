# 📝 Task Tracker App - Backend (MVC Architecture)

A simple **Task Tracker Backend API** built with **Node.js + Express + MongoDB**, following the **MVC (Model-View-Controller)** architecture pattern.  
This server handles task management operations such as creating, updating, deleting, and listing tasks.

---

## 🚀 Features
- Add a new task  
- Update an existing task  
- Delete a task  
- Get all tasks  
- Get tasks by status (e.g., pending, completed)  
- Proper error handling with middleware  

---

## 📂 Folder Structure
```bash
src/
├── controllers/ # Request handlers (Controller layer)
│ └── taskController.js
├── models/ # Mongoose models (Model layer)
│ └── taskModel.js
├── routes/ # API routes
│ └── taskRoutes.js
├── services/ # Business logic (Service layer)
│ └── taskService.js
├── middlewares/ # Error handling, validation
│ └── errorHandler.js
├── config/ # Database connection
│ └── db.js
├── app.js # Express app setup
└── server.js # Server entry point
```
## 🏗️ Architecture (MVC)
- **Model (M)** → Defines the `Task` schema using Mongoose.  
- **View (V)** → Not used here since it's an API-only server.  
- **Controller (C)** → Handles HTTP requests and responses.  
- **Service Layer** → Contains business logic (optional but keeps controllers clean).  

---

## ⚙️ Tech Stack
- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database & ODM  
- **Nodemon** – Development auto-reload  

---

## 📦 Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/task-tracker-app-server.git
cd task-tracker-app-server
```
###  2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up environment variables
Create a .env file in the root:
```bash
PORT=8000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/task-tracker
```
### 4️⃣ Run the server
```bash
npm run dev
```
Server will start at:
👉 http://localhost:5000/api/tasks

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get task by ID
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task by ID
DELETE	/api/tasks/:id	Delete a task by ID

### ✅ Example Task Object
```bash
{
  "title": "Finish project",
  "description": "Complete the Task Tracker app",
  "status": "pending"
}
```
### 📚 Learnings
- Practiced **MVC architecture** in a backend API.
- Implemented **service layer** for clean separation of concerns.
- Used **MongoDB** for persistent storage.

### 🛠️ Future Improvements

- User authentication (JWT)
- Task due dates & reminders
- Filtering & sorting tasks
- Docker containerization

---

## 👨‍💻 Author

<h3 align="center">Aaman Sayyed</h3>

<p align="center">
  <a href="https://sayyedaaman.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Portfolio-000?style=for-the-badge" />
  </a>
  <a href="https://www.linkedin.com/in/sayyed-aaman/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/sayyedaaman2">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="mailto:sayyedaaman9@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>
