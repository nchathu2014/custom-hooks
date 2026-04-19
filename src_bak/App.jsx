import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import { Cart } from "./components/Cart";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <>
      <div className="app">
        {/* <h1>Custom Hooks</h1> */}
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className="products">
          <section>
            {products?.map((product) => (
              <ProductCard
                key={product?.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <section>
            <Cart
              cart={cart}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
