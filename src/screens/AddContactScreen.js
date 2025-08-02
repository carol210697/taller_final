import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';

export default function AddContactScreen({ route, navigation }) {
  const { addContact } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [favorite, setFavorite] = useState(false);

  const handleSave = () => {
    const id = Date.now();
    addContact({ id, name, phone, favorite });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ej. Juan Pérez"
      />
      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Ej. 3001234567"
        keyboardType="phone-pad"
      />
      <View style={styles.switchRow}>
        <Text style={styles.label}>Favorito</Text>
        <Switch
          value={favorite}
          onValueChange={setFavorite}
          trackColor={{ false: '#ccc', true: '#E91E63' }}
          thumbColor={favorite ? '#fff' : '#fff'}
        />
      </View>

      <TouchableOpacity
        style={
          name && phone
            ? styles.primaryButton
            : [styles.primaryButton, styles.disabledButton]
        }
        onPress={handleSave}
        disabled={!name || !phone}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  label: { fontSize: 16, color: '#424242', marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
  },
  disabledButton: { backgroundColor: '#B39DDB' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});