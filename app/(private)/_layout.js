import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/bottomnav';

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>

            {/* Bottom Navigation Bar */}
            <BottomNav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingBottom: 60,
    },
});

export default Layout;
