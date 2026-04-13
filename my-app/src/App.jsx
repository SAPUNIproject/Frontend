import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<h2>Documents Page</h2>} />
        <Route path="/versions" element={<h2>Versions Page</h2>} />
        <Route path="/users" element={<h2>Users Page</h2>} />
        <Route path="/settings" element={<h2>Settings Page</h2>} />
      </Route>
    </Routes>
  );
}

export default App;