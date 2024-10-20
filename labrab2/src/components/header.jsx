const Header = () => {
  const navLinkStyle = {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "bold",
  };
  
  return (
    <header style={ { backgroundColor: "#007bff", color: "#fff", padding: "20px", textAlign: "center", borderBottom: "4px solid #0056b3" }}>
      <h1>Welcome to Our Store</h1>
      <p style={{ fontSize: "18px", marginTop: "10px", fontStyle: "italic" }}>Delivering quality products since 2010</p>
    </header>
  );
};

export default Header;