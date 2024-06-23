import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './Fetch'

function App() {
  return(
  <Fetch/>
  )
//   const [products, setProducts] = useState([])
//  useEffect (() => {
//   async function fetchProducts() {
//     const response = await fetch("http://localhost:3000/products");
//     const data = await response.json();
//     setProducts(data);
//   }
//   fetchProducts();
//  },[])
//   return (
//   <ul>
//     {products.map((p) =>(
//       <li key={p.id}>{p.name}</li>
//     ))}
//   </ul>
//   );
}

export default App
