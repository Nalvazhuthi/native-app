import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hellow</Text>
            <Text style={styles.content}>I am Nannii...</Text>
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 32,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    btn: {
        flex: 1,
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 20,
    },
    pressed: {
        backgroundColor: '#ccc',
    }
});