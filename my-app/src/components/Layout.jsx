import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const role = localStorage.getItem("role");

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo">DocFlow</h2>

        <nav className="sidebar-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/versions">Versions</Link>

          {role === "ADMIN" && <Link to="/users">Users</Link>}

          <Link to="/settings">Settings</Link>
        </nav>
      </aside>

      <div className="layout-main">
        <header className="topbar">
          <h1>Document Versioning System</h1>
          <div className="user-box">
            <div className="avatar">A</div>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}