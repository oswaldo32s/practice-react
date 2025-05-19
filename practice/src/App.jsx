import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ price: null, category: "all" });

  // IDs
  const priceId = useId();
  const categoryId = useId();

  // UseEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function changePriceFilter(event) {
    const newPrice = event.target.value;

    setFilters((prevPrice) => ({ ...prevPrice, price: newPrice }));
  }

  function changeCategoryFilter(event) {
    const newCategory = event.target.value;
    setFilters((prevCategory) => ({ ...prevCategory, category: newCategory }));
  }

  const filteredProducts = filters.price
    ? products.filter((product) => {
        return (
          product.price <= filters.price &&
          (filters.category === "all" || product.category === filters.category)
        );
      })
    : products;

  console.log(filters);

  return (
    <>
      <h1>Practice</h1>
      <header>
        <div>
          <label htmlFor={priceId}>price</label>
          <input
            min="0"
            max="1000"
            type="range"
            name="price"
            id={priceId}
            onChange={changePriceFilter}
          />
          <span>${filters.price}</span>
        </div>
        <div>
          <select
            name="category"
            id={categoryId}
            onChange={changeCategoryFilter}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </header>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          listStyle: "none",
          padding: 0,
          gap: "20px",
        }}
      >
        {filteredProducts?.map((product) => (
          <li
            key={product.id}
            style={{
              padding: "20px",
              border: "1px solid gray",
              borderRadius: "15px",
            }}
          >
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.description}
              style={{
                width: "100%",
                aspectRatio: 1,
                objectFit: "contain",
              }}
            />
            <p>{product.category}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
