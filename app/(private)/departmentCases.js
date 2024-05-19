import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CarretLeft, LocationIcon, ProfileCheck, SeenEyeIcon, TimeIcon, } from '../../components/icons'
import { router } from 'expo-router'
import { query } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';
import moment from 'moment';

export default function DepartmentCases() {

    const limitLocationName = (location) => {
        const words = location.split(' ');
        if (words.length > 10) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return location;
    };


    const [cases, setCases] = useState([]);


    useEffect(() => {
        async function getDocument() {
            const queryDoc = query(collection(FIREBASE_DB, "complaints"))
            const docSnapshot = await getDocs(queryDoc);
            const documents = docSnapshot.docs.map(doc => doc.data());
            setCases(documents)
        }
        getDocument()
    }, [])


    const todayCases = [
        {
            id: 1,
            image: "https://picsum.photos/370/260?grayscale",
            title: 'Check latest laws implemented by Indora police for public safety.',
            location: 'Indora',
            time: '7:30pm',
            status: "Unsolved"
        },
        {
            id: 2,
            image: "https://picsum.photos/id/55/370/260",
            title: 'New educational reforms announced by the government.',
            location: 'Delhi',
            time: '10:45am',
            status: "In Progress"
        },
        {
            id: 3,
            image: "https://picsum.photos/id/100/370/260",
            title: 'Launch of new healthcare initiative to combat COVID-19.',
            location: 'Jaipur',
            time: '2:15pm',
            status: "Solved"
        },
        {
            id: 4,
            image: "https://picsum.photos/id/400/370/260",
            title: 'Traffic advisory for upcoming festival season.',
            location: 'Ranchi',
            time: '4:20pm',
            status: "In Progress"
        },
        {
            id: 5,
            image: "https://picsum.photos/id/500/370/260",
            title: 'Local sports club announces upcoming tournaments.',
            location: 'Indore',
            time: '8:00am',
            status: "Unsolved"
        },
    ];

    const yesterdayCases = [
        {
            id: 1,
            image: "https://picsum.photos/id/26/370/260",
            title: 'New store opening in downtown area with special discounts.',
            location: 'Noida',
            time: '11:30am',
            status: "Solved"
        },
        {
            id: 2,
            image: "https://picsum.photos/id/143/370/260",
            title: 'Community clean-up event organized by local volunteers.',
            location: 'Mohali',
            time: '3:45pm',
            status: "In Progress"
        },
        {
            id: 3,
            image: "https://picsum.photos/id/110/370/260",
            title: 'Celebration of World Environment Day at Green Park.',
            location: 'CDG',
            time: '9:00am',
            status: "In Progress"
        },
        {
            id: 4,
            image: "https://picsum.photos/id/292/370/260",
            title: 'Food festival featuring diverse cuisines from around the world.',
            location: 'Jalandhar',
            time: '6:30pm',
            status: "Solved"
        },
        {
            id: 5,
            image: "https://picsum.photos/id/444/370/260",
            title: 'Book fair showcasing latest literary works and authors.',
            location: 'Phagwara',
            time: '12:00pm',
            status: 'Unsolved'
        },
    ];

    const handlePress = (item) => {
        router.navigate({ pathname: '/reportInsights', params: { data: JSON.stringify(item) } })
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ flex: 1, right: -18, }}
                    onPress={() => router.back()}>
                    <CarretLeft />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/images/public/pmalogo.png')}
                    style={styles.logo}
                />
                <View style={styles.placeholder} />
            </View>
            {/* Body */}
            <Text style={styles.sectionTitle}>Today</Text>
            {cases.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.9}
                    style={styles.newsBar}
                    onPress={() => handlePress(item)}>
                    <Image style={{ height: 65, width: 65, borderRadius: 5 }} source={{ uri: item.image }} />
                    <View style={styles.newsDetails}>
                        <Text style={styles.newsTitle}>{item.complaint}</Text>
                        <View style={styles.newsMetadata}>
                            {/* <View style={styles.metadataItem}>
                                <LocationIcon height={12} width={12} />
                                <Text style={styles.metadataText}>{limitLocationName(item.location)}</Text>
                            </View> */}
                            <View style={styles.metadataItem}>
                                <TimeIcon height={14} width={14} />
                                <Text style={styles.metadataText}>{moment(item.dateAdded).format("DD/MM/YYYY")}</Text>
                            </View>
                            <View style={styles.metadataItem}>
                                <SeenEyeIcon height={15} width={15} />
                                <Text style={styles.metadataText}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}


        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F9FD',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    logo: {
        height: 96,
        width: 96,
        alignSelf: 'center',
    },
    placeholder: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 25,
    },
    tabBar: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 2,
        padding: 10,
        paddingHorizontal: 17,
        marginBottom: 1,
    },
    sectionTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 20,
    },
    newsBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    newsDetails: {
        marginLeft: 15,
        flex: 1,
    },
    newsTitle: {
        fontWeight: '500',
    },
    newsMetadata: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    metadataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    metadataText: {
        color: '#AAAAAA',
    },
});