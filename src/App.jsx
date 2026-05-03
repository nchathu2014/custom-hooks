import "./App.css";
import { useCart } from "./hooks/useCart.js";
import { products } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  return (
    <>
      <div className="app">
        <div className="tech-stack">
          <h2>The Power of Custom Hooks 💪</h2>
          <p>Built with npm + vite + React + css</p>
        </div>

        <header>
          <h1><span className="logo">Hook</span>Cart</h1>

          <p className="light-green-text">
            Custom hooks. Clean cart
          </p>
        </header>
        <main className="products">
          <section>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            clearCart={clearCart}
            total={total}
          />
        </main>
      </div>
    </>
  );
}

export default App;
