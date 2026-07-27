import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Music, Disc, Headphones, Tag, ShoppingCart } from 'lucide-react-native';
import tw from 'twrnc';

export default function Menu() {
  const categories = [
    { name: 'Instrumentos', icon: Music },
    { name: 'Vinilos & CDs', icon: Disc },
    { name: 'Audio & DJ', icon: Headphones },
    { name: 'Ofertas', icon: Tag },
  ];

  return (
    <View style={tw`w-full bg-[#111115]/95 border-b border-[#22222a] pt-12 pb-3`}>
      {/* Top Row: Logo & Cart */}
      <View style={tw`flex-row justify-between items-center px-4 mb-3`}>
        {/* Logo */}
        <TouchableOpacity style={tw`flex-row items-center gap-2`}>
          <Music size={24} color="#a855f7" />
          <Text style={tw`font-extrabold text-xl tracking-wider text-transparent text-purple-400`}>
            SONORA
          </Text>
        </TouchableOpacity>

        {/* Shopping Cart Button */}
        <TouchableOpacity style={tw`flex-row items-center bg-gradient-to-r from-purple-600 to-pink-600 bg-purple-600 px-4 py-2 rounded-full shadow-lg`}>
          <ShoppingCart size={18} color="white" />
          <Text style={tw`text-white font-semibold ml-2 text-xs`}>Carrito</Text>
          <View style={tw`bg-white px-1.5 py-0.5 rounded-full ml-1.5`}>
            <Text style={tw`text-pink-600 text-[10px] font-bold`}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Horizontal Category Navigation */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`flex-row gap-4 px-4 py-1`}
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <TouchableOpacity 
              key={i} 
              style={tw`flex-row items-center bg-[#22222a] px-3 py-1.5 rounded-full border border-purple-950`}
            >
              <Icon size={14} color="#a855f7" style={tw`mr-1.5`} />
              <Text style={tw`text-gray-300 text-xs font-semibold`}>{cat.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
