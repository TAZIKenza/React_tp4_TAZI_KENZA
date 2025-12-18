import { useState, useEffect } from "react"; 
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native"; 
 import AppBar from "./AppBar";

export default function TodoListScreen({ navigation }) { 
 const [todos, setTodos] = useState([]); 
 const [loading, setLoading] = useState(true); 
 
 useEffect(() => { 
   console.log("Chargement des tâches..."); 
 
   setTimeout(() => { 
     setTodos([ 
       { id: 1, title: "Faire les courses" }, 
       { id: 2, title: "Sortir le chien" }, 
       { id: 3, title: "Coder une app RN" }, 
     ]); 
     setLoading(false); 
   }, 1000); 
 }, []); // [] => exécute une seule fois au montage 
 
 if (loading) { 
   return ( 
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
       <Text style={{ fontSize: 20 }}>Chargement...</Text> 
     </View> 
   ); 
 } 
 
 return (
  <View style={{ flex: 1 }}>
    {/* AppBar en haut */}
    <AppBar title="Mes tâches" />

    {/* Contenu */}
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={todos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={{ padding: 10, fontSize: 18 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </View>
);

} 