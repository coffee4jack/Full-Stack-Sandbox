import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import tw from 'twrnc';

import { API_URLS } from './config';
import Background from './components/Background';
import Menu from './components/Menu';
import Card from './components/Card';

export default function App() {
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

  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    console.log(`Intentando conectar a: ${API_URLS.products}`);
    axios.get(API_URLS.products)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos desde la base de datos.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#09053d]`}>
      <StatusBar style="light" />
      <Background color1="#9f22e3" color2="#09053d" />

      {/* Menú Superior */}
      <Menu />

      <ScrollView contentContainerStyle={tw`pb-12`}>
        {/* Sección de Título */}
        <View style={tw`items-center mt-6 px-4`}>
          <Text style={tw`text-2xl font-extrabold text-white text-center tracking-wide`}>
            Instrumentos & Equipos Destacados
          </Text>
          <Text style={tw`text-purple-300 text-xs mt-1 text-center`}>
            Equípate con el mejor sonido para tu estudio o escenario
          </Text>
        </View>

        {/* Contenedor de Productos */}
        <View style={tw`flex-row flex-wrap justify-center px-2 mt-6`}>
          {loading && (
            <View style={tw`mt-8 items-center`}>
              <ActivityIndicator size="large" color="#a855f7" />
              <Text style={tw`text-white text-sm mt-3`}>Cargando productos desde el servidor...</Text>
            </View>
          )}

          {error && (
            <View style={tw`mt-8 px-4 items-center`}>
              <Text style={tw`text-red-400 text-center text-sm font-semibold`}>{error}</Text>
              <Text 
                onPress={fetchProducts} 
                style={tw`text-purple-400 text-sm mt-4 font-bold underline`}
              >
                Reintentar conexión
              </Text>
            </View>
          )}

          {!loading && !error && products.length === 0 && (
            <Text style={tw`text-gray-300 text-sm mt-8 text-center`}>
              No hay productos disponibles en la tienda.
            </Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
