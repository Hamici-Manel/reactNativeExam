// app/_layout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsLayout from './(tabs)/_layout';

const AppLayout = () => {
  return (
    <NavigationContainer>
      <TabsLayout />
    </NavigationContainer>
  );
};

export default AppLayout;
