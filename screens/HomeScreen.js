import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f8ff', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>🏠 Accueil</Text>

      <Button
        title="Voir les détails"
        onPress={() => navigation.navigate('Details', { id: 42 })}
      />
    </View>
  );
}

export default HomeScreen;
