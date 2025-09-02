import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Dashboard from "./pages/dashboard/Dashboard";
import ClientPage from "./pages/customers/ClientPage";
import Layout from "./components/Layout";
import "./App.css";
import ClientUser from "./pages/customers/ClientUser";
import ProjectsPage from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/clients-users" element={<ClientUser />} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
