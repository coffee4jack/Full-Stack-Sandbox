import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';

// Helper to map Tailwind gradient class names to color hex pairs for expo-linear-gradient
const getGradientColors = (bgClass) => {
  if (bgClass.includes('purple-900') && bgClass.includes('indigo-900')) return ['#581c87', '#312e81'];
  if (bgClass.includes('blue-900') && bgClass.includes('slate-900')) return ['#1e3a8a', '#0f172a'];
  if (bgClass.includes('pink-900') && bgClass.includes('rose-900')) return ['#831843', '#881337'];
  if (bgClass.includes('violet-900') && bgClass.includes('fuchsia-900')) return ['#4c1d95', '#701a75'];
  if (bgClass.includes('amber-900') && bgClass.includes('amber-950')) return ['#78350f', '#451a03'];
  if (bgClass.includes('emerald-900') && bgClass.includes('teal-950')) return ['#064e3b', '#042f2e'];
  return ['#42c264', '#16a34a']; // Default green
};

export default function Card({ BackgroundColor = 'bg-[#42c264]', Image: imageUrl, Title, Description, Price }) {
  const gradientColors = getGradientColors(BackgroundColor);

  return (
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={tw`w-[45%] m-2 rounded-2xl overflow-hidden shadow-lg`}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={tw`p-3`}
      >
        <View style={tw`bg-[#ededed] p-3 rounded-xl flex-col gap-2 min-h-[220px] justify-between`}>
          <View>
            {imageUrl ? (
              <Image 
                source={{ uri: imageUrl }} 
                style={tw`w-full h-28 rounded-lg mb-2`}
                resizeMode="cover"
              />
            ) : (
              <View style={tw`w-full h-28 bg-gray-300 rounded-lg mb-2 items-center justify-center`}>
                <Text style={tw`text-gray-500 text-xs`}>Sin Imagen</Text>
              </View>
            )}
            <Text style={tw`text-sm font-bold text-black`} numberOfLines={1}>
              {Title}
            </Text>
            <Text style={tw`text-gray-600 text-[10px] font-light mt-1`} numberOfLines={2}>
              {Description}
            </Text>
          </View>

          {Price && (
            <View style={tw`flex-row justify-between items-center pt-2 border-t border-gray-200 mt-2`}>
              <Text style={tw`text-xs font-bold text-purple-700`}>{Price}</Text>
              <View style={tw`bg-purple-100 px-2 py-0.5 rounded`}>
                <Text style={tw`text-[9px] text-purple-700 font-bold`}>Comprar</Text>
              </View>
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
