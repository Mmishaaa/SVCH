import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#007bff", color: "#fff", padding: "20px", textAlign: "center", borderBottom: "4px solid #0056b3" }}>
      <Typography variant="h1" sx={{ fontSize: "32px" }}>
        Welcome to Our Store
      </Typography>
      <Typography sx={{ fontSize: "18px", marginTop: "10px", fontStyle: "italic" }}>
        Delivering quality products since 2010
      </Typography>
      <nav style={{ marginTop: "15px" }}>
        <Link to="/about" style={linkStyles}>
          About
        </Link>
        <Link to="/profile" style={linkStyles}>
          Profile
        </Link>
        <Link to="/cards" style={linkStyles}>
          Cards
        </Link>
      </nav>
    </header>
  );
};

export default Header;

const linkStyles = {
  color: "#fff",
  margin: "0 15px",
  textDecoration: "none"
};
