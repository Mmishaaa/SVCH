import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#007bff", color: "#fff", padding: "20px", textAlign: "center", borderBottom: "4px solid #0056b3" }}>
      <h1>Welcome to Our Store</h1>
      <p style={{ fontSize: "18px", marginTop: "10px", fontStyle: "italic" }}>Delivering quality products since 2010</p>
      <nav style={{ marginTop: "15px" }}>
        <Link to="/about" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/profile" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
