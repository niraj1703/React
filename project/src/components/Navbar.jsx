import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <h2>Dashboard</h2>
      <span>{user?.email}</span>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

