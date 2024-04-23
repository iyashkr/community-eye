import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { router, usePathname } from 'expo-router';
import { AccountActive, AccountIcon, CommunityActive, CommunityIcon, HomeActive, HomeIcon, NewsActive, NewsIcon } from './icons';

export default function BottomNav() {
    const route = usePathname();
    const [activeTab, setActiveTab] = useState(1); // Set the initial active tab

    const tabs = [
        { tab: "/home", id: 1, Icon: activeTab === 1 ? HomeActive : HomeIcon },
        { tab: "/community", id: 2, Icon: activeTab === 2 ? CommunityActive : CommunityIcon },
        { tab: "/news", id: 3, Icon: activeTab === 3 ? NewsActive : NewsIcon },
        { tab: "/profile", id: 4, Icon: activeTab === 4 ? AccountActive : AccountIcon }
    ];

    useEffect(() => {
        const tabIndex = tabs.findIndex(tab => tab.tab === route);
        setActiveTab(tabIndex !== -1 ? tabIndex + 1 : 1);
        // console.log(tabIndex, route, tabs)
    }, [route]);

    const handleTabPress = (tab) => {
        router.navigate(tab.tab);
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
        paddingHorizontal: 40,
        borderTopWidth: 1,
        borderColor: "#706D6D2B",
        backgroundColor: "#FCFFF7"
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: 60,
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
        width: 60,
    }
});
