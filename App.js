// Importações necessárias
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import home from './screens/home';
import Configuracoes from './screens/Configuracoes';
import Perfil from './screens/Perfil';
import Metodos from './screens/Metodos';
import Tempo from './screens/Tempo';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black"
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "grey"
        }}
      >
        <Tab.Screen name='Metas' component={home}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./icones/check.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
         <Tab.Screen name="Métodos" component={Metodos}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./icones/book.png')}  
                style={{height: 24, width: 24}}
              />
            )
          }}
        />
        <Tab.Screen name="Cronômetro" component={Tempo}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./icones/hourglass.png')}  
                style={{height: 24, width: 24}}
              />
            )
          }}
        />
        <Tab.Screen name="Configurações"  component={Configuracoes} 
          options={{
            tabBarIcon: () => (
              <Image 
                source={require('./icones/settings-gear-icon.png')}  
                style={{width: 24, height: 24}}
              />
            )
          }}
        />
        <Tab.Screen name="Perfil" component={Perfil} 
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./icones/user.png')}  
                style={{height: 24, width: 24}}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}