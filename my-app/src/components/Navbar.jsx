import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="link" to="/dashboard">Dashboard</Link>
      <Link className="link" to="/files">Files</Link>
    </nav>
  );
}