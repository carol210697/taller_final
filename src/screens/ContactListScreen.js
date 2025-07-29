import React, {useState}from "react";
import { View, Text, StyleSheet } from "react-native";

//ejemplo para validar git
// nuevo ejemplo para probar git
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactPhone: {
        fontSize: 16,
        color: '#555',
    },
});
export default function ContactListScreen() {
    const [contacts, setContacts] = useState([]);
    
    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const total = contacts.length;

    if (total === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>No hay contactos disponibles</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Contactos ({total})</Text>
                {contacts.map(contact => (
                    <View key={contact.id} style={styles.contactItem}>
                        <Text style={styles.contactName}>{contact.name}</Text>
                        <Text style={styles.contactPhone}>{contact.phone}</Text>
                    </View>
                ))}
            </View>
        );
     };
};
