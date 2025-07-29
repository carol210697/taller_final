import React, {useState} from "react";
import { StyleSheet, Button, TextInput, Text,View } from "react-native";

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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default function AddContactScreen({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Añadir nuevo contacto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefono"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Guardar contacto" onPress={() => {

                const newContact = { id: Date.now(), name, phone };

                navigation.navigate('Contactos', { newContact });
            }} />
        </View>
    );
}
