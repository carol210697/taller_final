import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>añadir contacto</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
            />
            <Button
                title="Save Contact"
                onPress={() => {
                    console.log({name, phone});
                }}
            />
        </View>
    );
}