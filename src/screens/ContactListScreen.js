import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [filterMode, setFilterMode] = useState('all');

  const displayed =
    filterMode === 'favorites'
      ? contacts.filter(c => c.favorite)
      : contacts;

  if (contacts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay contactos</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate('AddContact', {
              addContact: c => setContacts(prev => [...prev, c]),
            })
          }
        >
          <Text style={styles.buttonText}>Agregar contacto</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterMode === 'all' && styles.filterActive,
          ]}
          onPress={() => setFilterMode('all')}
        >
          <Text
            style={
              filterMode === 'all'
                ? styles.filterTextActive
                : styles.filterText
            }
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterMode === 'favorites' && styles.filterActive,
          ]}
          onPress={() => setFilterMode('favorites')}
        >
          <Text
            style={
              filterMode === 'favorites'
                ? styles.filterTextActive
                : styles.filterText
            }
          >
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.list}>
        {displayed.map(contact => (
          <View key={contact.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Ionicons
              // Esto lo hice asi, porque tenia error al momento de cargar los iconos
                name={
                  contact.favorite ? 'star' : 'calendar'
                }
                size={24}
                color={contact.favorite ? '#FFD700' : '#757575'}
                style={styles.icon}
              />
              <Text
                style={
                  contact.favorite
                    ? [styles.nameText, styles.favoriteName]
                    : styles.nameText
                }
              >
                {contact.name}
              </Text>
            </View>
            <Text style={styles.phoneText}>{contact.phone}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() =>
          navigation.navigate('AddContact', {
            addContact: c => setContacts(prev => [...prev, c]),
          })
        }
      >
        <Text style={styles.buttonText}>Agregar contacto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emptyText: { fontSize: 20, color: '#757575', marginBottom: 20 },
  filterRow: { flexDirection: 'row', justifyContent: 'space-around' },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6200EE',
  },
  filterActive: { backgroundColor: '#6200EE' },
  filterText: { color: '#6200EE', fontWeight: '600' },
  filterTextActive: { color: '#fff', fontWeight: '600' },
  list: { marginVertical: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardRow: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 12 },
  nameText: { fontSize: 18, color: '#212121' },
  favoriteName: { fontWeight: 'bold' },
  phoneText: { marginTop: 4, fontSize: 14, color: '#757575' },
  primaryButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});