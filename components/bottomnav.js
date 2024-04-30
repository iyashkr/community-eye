import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { router, usePathname } from 'expo-router';
import { AccountActive, AccountIcon, CommunityActive, CommunityIcon, HomeActive, HomeIcon, NewsActive, NewsIcon } from './icons';
import { set } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BottomNav() {
    const route = usePathname();
    const [activeTab, setActiveTab] = useState(1); // Set the initial active tab
    const [role, setRole] = useState('user');

    const tabs = [

        { tab: role === 'user' ? "/home" : '/adminHome', id: 1, Icon: activeTab === 1 ? HomeActive : HomeIcon },

        { tab: "/community", id: 2, Icon: activeTab === 2 ? CommunityActive : CommunityIcon },
        { tab: "/news", id: 3, Icon: activeTab === 3 ? NewsActive : NewsIcon },
        { tab: "/profile", id: 4, Icon: activeTab === 4 ? AccountActive : AccountIcon }
    ];

    useEffect(() => {
        async function getRole() {
            const roleName = await AsyncStorage.getItem('role');
            setRole(roleName);
            const tabIndex = tabs.findIndex(tab => tab.tab === route);
            setActiveTab(tabIndex !== -1 ? tabIndex + 1 : 1);
        }
        getRole()
        // console.log(tabIndex, route, tabs)
    }, [route]);

    const handleTabPress = (tab) => {
        router.replace(tab.tab);
        setActiveTab(tab.id);
    };

    const renderTab = (tab) => (
        <View key={tab.id} style={activeTab === tab.id ? styles.activeTab : styles.tab}>
            <TouchableOpacity onPress={() => handleTabPress(tab)} style={styles.icon}>
                <tab.Icon />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {tabs.map(renderTab)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        borderTopWidth: 1,
        borderColor: "#706D6D2B",
        backgroundColor: "white"
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: 70,
    },
    icon: {
        justifyContent: 'center',
        shadowColor: "#F68220",
        alignItems: 'center',
        height: "100%",
    },
    activeTab: {
        backgroundColor: "#3278C5",
        height: "100%",
        width: 70,
    }
});
