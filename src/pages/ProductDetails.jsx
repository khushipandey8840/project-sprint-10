import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <img
        src={product.thumbnail}
        width="300"
      />

      <h1>{product.title}</h1>

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <h3>Rating : {product.rating}</h3>

      <h3>Brand : {product.brand}</h3>

      <h3>Category : {product.category}</h3>
    </div>
  );
}

export default ProductDetails;