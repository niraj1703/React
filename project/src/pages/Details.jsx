import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Details() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    if (!user) navigate("/");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [user, navigate]);

  const filteredData = data
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setSortAsc(!sortAsc)}>Sort</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
        Prev
      </button>
      <button disabled={filteredData.length < rowsPerPage} onClick={() => setCurrentPage((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
}
