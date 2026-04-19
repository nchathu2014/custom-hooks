import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
