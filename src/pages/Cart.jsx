import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>£{item.price}</p>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;