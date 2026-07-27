import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setMaxPrice } from "../store/filterSlice";
import ProductCard from "../components/ProductCard";

function Shop() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const { category, maxPrice } = useSelector((state) => state.filter);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "all" || product.category === category;

    const priceMatch = product.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "220px",
          padding: "20px",
          borderRight: "1px solid #ccc",
        }}
      >
        <h3>Filters</h3>

        <p>Category</p>

        <select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        <p style={{ marginTop: "20px" }}>
          Max Price: ${maxPrice}
        </p>

        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;