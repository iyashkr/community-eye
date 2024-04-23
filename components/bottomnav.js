import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router';
import { AccountActive, AccountIcon, CommunityActive, CommunityIcon, HomeActive, HomeIcon, NewsActive, NewsIcon } from './icons';

export default function BottomNav({ route }) {
    const [activeTab, setActiveTab] = useState(1); // Set the initial active tab
    const tabs = [
        {
            tab: "/home",
            id: 1
        },
        {
            tab: "/community",
            id: 2
        },
        {
            tab: "/news",
            id: 3
        },
        {
            tab: "/account",
            id: 4
        }
    ];

    useEffect(() => {
        const tabIndex = tabs.findIndex(tab => tab.tab === route);
        if (tabIndex !== -1) {
            setActiveTab(tabIndex + 1);
        } else {
            setActiveTab(0);
        }
    }, [route]);

    const handleTabPress = (tab) => {
        router.navigate(tabs[tab].tab);
        setActiveTab(tabs[tab].id);
    };



    return (
        <View style={styles.container}>
            <View style={styles.tab}>
                <TouchableOpacity onPress={() => handleTabPress(0)} style={styles.icon}>
                    {activeTab === 1 ?
                        <View style={{}}>
                            <HomeActive />
                        </View> : <HomeIcon />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity onPress={() => handleTabPress(1)} style={styles.icon}>
                    {activeTab === 2 ? <CommunityActive /> : <CommunityIcon />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity onPress={() => handleTabPress(2)} style={styles.icon}>
                    {activeTab === 3 ? <NewsActive /> : <NewsIcon />}
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity onPress={() => handleTabPress(3)} style={styles.icon}>
                    {activeTab === 4 ? <AccountActive /> : <AccountIcon />}
                </TouchableOpacity>
            </View>
        </View>
    )
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
        justifyContent: 'center'
    },
    icon: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        shadowColor: "#F68220",
    }
})