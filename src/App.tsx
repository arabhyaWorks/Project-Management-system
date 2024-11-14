import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Projects } from "./pages/Projects";
import { Projects as NewProjecsts } from "./pages/newProject";
import { ProjectForm } from "./pages/ProjectForm";
import { Issues } from "./pages/Issues";
import { AuthProvider } from "./context/AuthContext";
import ProjectDashboard from "./pages/projectDashboard";
import Gallery from "./pages/Gallery";
import MilestonePage from "./pages/MilestonePage";
import UsersList from "./pages/userList";
import ProjectInsection from "./pages/projectInspection";
import ProjectTest from "./pages/projectTest";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="users" element={<UsersList />} />

            <Route path="projectDashboard" element={<ProjectDashboard />} />
            <Route path="gallery" element={<Gallery isSidebarOpen={false} />} />
            <Route path="milestones" element={<MilestonePage />} />
            <Route path="projectInspection" element={<ProjectInsection />} />
            <Route path="projectTest" element={<ProjectTest />} />

            <Route path="projects/new" element={<ProjectForm />} />
            {/* <Route path="milestones" element={<Milestones />} /> */}
            <Route path="issues" element={<Issues />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
