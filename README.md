# To-Do App

This is a React-based To-Do application with authentication, task management, and filtering capabilities.

## Features
- User Authentication (Login/Logout)
- Task Management (Add, Delete, Mark as Important, Complete)
- Sidebar Navigation
- Task Filtering (All Tasks, Important, Assigned, Today’s Tasks)
- Persistent Storage using Redux Persist

## Tech Stack
- React.js
- Redux Toolkit
- Tailwind CSS
- Lucide Icons
- Redux Persist

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Install Dependencies
```sh
npm install  # or yarn install
```

### 3. Start the Development Server
```sh
npm run dev  # or yarn dev
```
The app will be available at `http://localhost:5173/` (default Vite port).

## Project Structure
```
📂 todo-app/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── Sidebar.jsx
│   │   ├── AuthWrapper.jsx
│   ├── 📂 store/
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── todosReducer.js
│   ├── App.jsx
│   ├── index.js
├── 📜 package.json
├── 📜 README.md
```

## Running the Build
To create a production build:
```sh
npm run build  # or yarn build
```
The built files will be in the `dist/` folder.

## Deployment
To deploy, you can use:
```sh
npm run preview  # or yarn preview
```
This will serve the built files locally.

## Issues & Contributions
If you encounter any issues, please open an issue on GitHub. Contributions are welcome!

---
**Happy Coding!** 🚀

