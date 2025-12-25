// import { createSlice } from "@reduxjs/toolkit"; 
// const todosSlice = createSlice({ 
// name: "todos", 
// initialState: [], 
// reducers: { 
// addTodo: (state, action) => { 
// state.push(action.payload); 
// }, 
// removeTodo: (state, action) => { 
//      return state.filter((t) => t.id !== action.payload); 
//    }, 
//  }, 
// }); 
 
// export const { addTodo, removeTodo } = todosSlice.actions; 
// export default todosSlice.reducer;
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";

 
import { Provider } from "react-redux"; 
import { store } from "./store/store"; 
 
function RootNavigator() { 
 const { user } = useContext(AuthContext); 
 
 return user ? <AppDrawer /> : <LoginScreen />; 
} 
 
export default function App() { 
 return ( 
   <Provider store={store}> 
     <AuthProvider> 
       <NavigationContainer> 
         <RootNavigator /> 
       </NavigationContainer> 
     </AuthProvider> 
   </Provider> 
 ); 
} 