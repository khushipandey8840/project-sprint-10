import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#333",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/shop" style={{ color: "white" }}>
        Shop
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;