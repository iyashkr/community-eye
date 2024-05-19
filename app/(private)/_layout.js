import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/bottomnav';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <Slot />
            </View>

            {/* Bottom Navigation Bar */}
            <View style={{ height: 60 }}>
                <BottomNav />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "white"
    },
    content: {
        flex: 1,
        height: "100%",
    },
});

export default Layout;
