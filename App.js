import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

// Tailwind config
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';

export default function App() {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <View style={tailwind('text-green-300')}>
        <Text style={tailwind('text-green-500')}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
