
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Sneakers",
    price: 79.99,
    description: "Comfy and cool sneakers.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Jacket",
    price: 99.99,
    description: "Warm and stylish jacket.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Hat",
    price: 19.99,
    description: "Trendy summer hat.",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80",
  },
];

// Home Page
function Home({ addToCart }) {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "#333" }}>🛍️ All Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 15,
            borderRadius: 8,
            backgroundColor: "#f9f9f9",
          }}
        >
          <img
            src={p.image}
            alt={p.name}
            style={{
              width: 200,
              height: 150,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />

          <h3 style={{ color: "#007bff" }}>{p.name}</h3>

          <p>
            Price:{" "}
            <strong style={{ color: "green" }}>
              ${p.price}
            </strong>
          </p>

          <Link
            to={`/product/${p.id}`}
            style={{ color: "#0066cc" }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

// Product Detail Page
function ProductPage({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  return (
    <div style={{ padding: 20 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: 300,
          height: 220,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />

      <h2 style={{ color: "#007bff" }}>{product.name}</h2>

      <p>{product.description}</p>

      <p>
        Price:{" "}
        <strong style={{ color: "green" }}>
          ${product.price}
        </strong>
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

// Cart Page
function Cart({ cart }) {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "#333" }}>
        🛒 Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ color: "#888" }}>
          Your cart is empty.
        </p>
      ) : (
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
          }}
        >
          {cart.map((item, i) => (
            <li
              key={i}
              style={{
                marginBottom: 10,
                backgroundColor: "#f1f1f1",
                padding: 10,
                borderRadius: 4,
              }}
            >
              {item.name} —{" "}
              <strong style={{ color: "green" }}>
                ${item.price}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main App Component
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <nav
        style={{
          padding: 10,
          backgroundColor: "#343a40",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: "white",
              marginRight: 15,
              textDecoration: "none",
            }}
          >
            🏠 Home
          </Link>

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={
            <ProductPage addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

