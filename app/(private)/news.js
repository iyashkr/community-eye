import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { CarretLeft, LocationIcon, ProfileCheck, SeenEyeIcon, TimeIcon, } from '../../components/icons'
import { router } from 'expo-router'

export default function News() {
    const options = ['All', 'Education', 'Politics', 'Health', 'Sports', 'Events', 'Religion'];

    const [selectedOption, setSelectedOption] = useState(0);

    const handleOptionPress = (index) => {
        setSelectedOption(index);
    };
    const limitLocationName = (location) => {
        const words = location.split(' ');
        if (words.length > 10) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return location;
    };

    const newsData = [
        {
            id: 1,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Check latest laws implemented by Indora police for public safety.',
            location: 'Indora',
            time: '7:30pm',
            views: 456
        },
        {
            id: 2,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'New educational reforms announced by the government.',
            location: 'City Center',
            time: '10:45am',
            views: 320
        },
        {
            id: 3,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Launch of new healthcare initiative to combat COVID-19.',
            location: 'Hospital Road',
            time: '2:15pm',
            views: 542
        },
        {
            id: 4,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Traffic advisory for upcoming festival season.',
            location: 'Highway Junction',
            time: '4:20pm',
            views: 278
        },
        {
            id: 5,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Local sports club announces upcoming tournaments.',
            location: 'Sports Complex',
            time: '8:00am',
            views: 175
        },
        {
            id: 6,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'New store opening in downtown area with special discounts.',
            location: 'Main Street',
            time: '11:30am',
            views: 392
        },
        {
            id: 7,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Community clean-up event organized by local volunteers.',
            location: 'Park Avenue',
            time: '3:45pm',
            views: 209
        },
        {
            id: 8,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Celebration of World Environment Day at Green Park.',
            location: 'Green Park',
            time: '9:00am',
            views: 613
        },
        {
            id: 9,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Food festival featuring diverse cuisines from around the world.',
            location: 'Food Street',
            time: '6:30pm',
            views: 478
        },
        {
            id: 10,
            imageUrl: require('../../assets/images/public/testImage.png'),
            title: 'Book fair showcasing latest literary works and authors.',
            location: 'Library Lane',
            time: '12:00pm',
            views: 356
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            style={styles.newsBar}
            onPress={() => router.navigate('/readnews')}
        >
            <Image style={{ height: 65, width: 65, borderRadius: 5, }} source={item.imageUrl} />
            <View style={styles.newsDetails}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <View style={styles.newsMetadata}>
                    <View style={styles.metadataItem}>
                        <LocationIcon height={12} width={12} />
                        <Text style={styles.metadataText}>{item.location}</Text>
                    </View>
                    <View style={styles.metadataItem}>
                        <TimeIcon height={14} width={14} />
                        <Text style={styles.metadataText}>{item.time}</Text>
                    </View>
                    <View style={styles.metadataItem}>
                        <SeenEyeIcon height={15} width={15} />
                        <Text style={styles.metadataText}>{item.views}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
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
            <Text style={styles.title}>Daily News Updates</Text>
            {/* Options */}
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tabBar, selectedOption === index && styles.selectedOption]}
                        onPress={() => handleOptionPress(index)}
                    >
                        <Text style={[{}, selectedOption === index && styles.selectedOptionText]}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.sectionTitle}>Today</Text>
            {/* News List */}
            <FlatList
                data={newsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ paddingHorizontal: 25 }}
            />
        </View>
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
    optionsContainer: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
        gap: 10,
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
    selectedOption: {
        backgroundColor: "#FCB226",
    },
    selectedOptionText: {
        color: 'white',
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