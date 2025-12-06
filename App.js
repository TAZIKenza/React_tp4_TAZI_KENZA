import React from 'react'; 
import { View, Text, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from './screens/HomeScreen'; 
import DetailsScreen from './screens/DetailsScreen'; 
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppBar from './screens/AppBar';
import { SafeAreaProvider, SafeAreaView } from 
'react-native-safe-area-context';

const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator(); 
 
// --- Écrans --- 

 
 
 

// --- Navigation par pile --- 
function HomeStack() { 
  return ( 
    <Stack.Navigator screenOptions={{ headerShown: true}}> 
      <Stack.Screen  name="Accueil"  component={HomeScreen}  options={{ 
    headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',  headerTitleStyle: { fontWeight: 'bold' },  }} />  
     <Stack.Screen  name="Details"  component={DetailsScreen}  options={{ title: 'Mes Détails Personnalisés', headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',  headerTitleStyle: { fontWeight: 'bold' },}} />  
    </Stack.Navigator> 
  ); 
} 
 
// --- Navigation par onglets --- 
export default function App() { 
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer> 
       <AppBar />
      <Tab.Navigator 
screenOptions={{ 
headerShown: false,          
// cacher le heade
tabBarActiveTintColor: 'blue', // couleur de l’onglet actif 
tabBarInactiveTintColor: 'gray', // couleur de l’ongletinactif 
tabBarStyle: { backgroundColor: '#f0f0f0' }, // style de  la barre 
tabBarLabelStyle: { fontSize: 14 }, // style du texte 
}} 
> 
    <Tab.Screen  name="Maison"  component={HomeStack}  
    options={{ tabBarIcon: ({ color, size }) => 
    (  <Ionicons name="home" size={size} color={color} />     ), 
}} /> 
<Tab.Screen name="Paramètres" component={SettingsScreen} 
options={{ tabBarIcon: ({ color,size }) => ( <Ionicons name="settings" size={size} color={color} />  ), 
}}  /> 
      </Tab.Navigator> 
    </NavigationContainer> 
    </SafeAreaView>
    </SafeAreaProvider>
  ); 
}