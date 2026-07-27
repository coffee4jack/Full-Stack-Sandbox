import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Background({ color1 = '#9f22e3', color2 = '#09053d' }) {
  return (
    <LinearGradient
      colors={[color1, color2]}
      style={StyleSheet.absoluteFillObject}
    />
  );
}
