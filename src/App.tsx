import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';

import { CartProvider } from './contexts/Cart';
import { Routes } from './routes';
import { queryClient } from './services/queryClient';
import { lightTheme, navigationLightTheme } from './theme/light';

export function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={lightTheme}>
            <CartProvider>
              <NavigationContainer theme={navigationLightTheme}>
                <Routes />
              </NavigationContainer>
            </CartProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
