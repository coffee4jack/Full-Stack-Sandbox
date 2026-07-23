import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

import GetData from './components/GetData';
import Background from './components/Background';

import Card from './components/Card';
import UsersInCard from './components/UsersInCard';
import Menu from './components/Menu';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gradients = [
    "bg-gradient-to-br from-purple-900 to-indigo-900",
    "bg-gradient-to-br from-blue-900 to-slate-900",
    "bg-gradient-to-br from-pink-900 to-rose-900",
    "bg-gradient-to-br from-violet-900 to-fuchsia-900",
    "bg-gradient-to-br from-amber-900 to-amber-950",
    "bg-gradient-to-br from-emerald-900 to-teal-950"
  ];

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos desde la base de datos.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* <GetData /> */}

      {/* Background-Gradient-Color */}
      <Background color1="#9f22e3" color2="#09053d" />

      {/* Top Menu */}
      <Menu />

      {/* Seccion de Titulo */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          Instrumentos & Equipos Destacados
        </h2>
        <p className="text-purple-300 text-sm mt-2">
          Equípate con el mejor sonido para tu estudio o escenario
        </p>
      </div>

      {/* div that wraps */}
      <div className='flex flex-wrap justify-center items-center gap-6 w-[85%] mx-auto my-8 p-4'>
        {loading && <p className="text-white text-lg">Cargando productos desde el servidor...</p>}
        {error && <p className="text-red-400 text-lg">{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className="text-gray-300 text-lg">No hay productos disponibles en la tienda.</p>
        )}
        {!loading && !error && products.map((product, index) => (
          <Card 
            key={product.id || index}
            Title={product.name}
            Image={product.image_url}
            Description={product.description}
            Price={`$${product.price}`}
            BackgroundColor={gradients[index % gradients.length]}
          />
        ))}
      </div>

    </>
  )
}

export default App
