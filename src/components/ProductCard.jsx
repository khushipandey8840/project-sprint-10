import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        cursor: "pointer",
      }}
    >
      <div onClick={() => navigate(`/product/${product.id}`)}>
        <img
          src={product.thumbnail}
          width="200"
          alt={product.title}
        />

        <h3>{product.title}</h3>

        <p>${product.price}</p>
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;