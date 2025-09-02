import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Dashboard from "./pages/dashboard/Dashboard";
import ClientPage from "./pages/customers/ClientPage";
import Layout from "./components/Layout";
import StaffPage from "./pages/staff/StaffPage";
import StarredProjects from "./components/StarredProjects"; 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/staff" element={<StaffPage />} />
           <Route path="/starred-projects" element={<StarredProjects />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
