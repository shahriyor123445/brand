import { useEffect, useState } from "react";
import "./App.css";

const brand = ["Logitech", "HyperX", "Asus"];
const color = [
  "rgba(0, 0, 0, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(238, 4, 4, 1)",
  "rgba(21, 180, 215, 1)",
];

function Fetch() {
  const [products, setProducts] = useState([]);
  const [selectbrand, setSelectBrand] = useState(null);
  const [selectColor, setSelectColor] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProductsByBrand() {
      const response = await fetch(
        `http://localhost:3000/products?brand=${selectbrand}`
      );
      const data = await response.json();
      setProducts(data);
    }
    if (selectbrand) {
      fetchProductsByBrand();
    }
  }, [selectbrand]);

  useEffect(() => {
    async function fetchProductsByColor() {
      const response = await fetch(
        `http://localhost:3000/products?color=${selectColor}`
      );
      const data = await response.json();
      setProducts(data);
    }
    if (selectColor) {
      fetchProductsByColor();
    }
  }, [selectColor]);

  return (
    <div className="brand">
      <div>
        <div>
          <h2>brand</h2>
          {brand.map((b, index) => (
            <div key={index}>
              <label htmlFor="b">{b}</label>
              <input
                onClick={(event) => setSelectBrand(event.target.value)}
                name="brand"
                type="radio"
                id={b}
                value={b}
              />
            </div>
          ))}
        </div>

        <div>
          <h2>Color</h2>
          {color.map((c, index) => (
            <div key={index}>
              <label htmlFor={c}>{c}</label>
              <input
                onClick={(event) => setSelectColor(event.target.value)}
                name="color"
                type="radio"
                id={c}
                value={c}
              />
            </div>
          ))}
        </div>
      </div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>name</strong>
            {p.name} <br />
            {p.category} <br />
            {p.description} <br />
             {p.brand}   <br />
            {p.color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
