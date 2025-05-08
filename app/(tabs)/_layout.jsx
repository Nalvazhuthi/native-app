import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';

const CustomTabs = ({ label, focused }) => (
    <View style={[styles.tabWrapper, focused && styles.tabWrapperFocus]}>
        <Text style={[styles.tabWrapperText, focused && styles.tabWrapperFocusText]}>
            {label}
        </Text>
    </View>
);

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabContainer,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused }) => <CustomTabs label="Home" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ focused }) => <CustomTabs label="Search" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    tabBarIcon: ({ focused }) => <CustomTabs label="Saved" focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => <CustomTabs label="Profile" focused={focused} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        margin: 50
    },
    tabWrapper: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabWrapperFocus: {
        backgroundColor: '#f0f0f0',
    },
    tabWrapperText: {
        width: "100%",
        fontSize: 10,
        color: '#888',
        textAlign: 'center',
    },
    tabWrapperFocusText: {
        color: '#007AFF',
        fontWeight: '600',
    },
});
