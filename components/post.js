import { View, Text, StyleSheet, Image, TouchableOpacity, Share } from 'react-native'
import React, { useState } from 'react'
import { CommentIcon, LikeIcon, ShareIcon } from './icons'

export default function Post() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    async function sharePost() {
        await Share.share({ message: `https://communityeye.in/post123/` });
    }

    return (
        <View style={styles.profileBar}>
            <View style={{ paddingHorizontal: 20, gap: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Image source={require('../assets/images/public/testProfile.png')}
                    style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 100, }} />
                <Text style={{ color: "#323232", fontWeight: "500", fontSize: 15 }}>
                    Public Work Department - Indora
                </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/public/before.png')} style={{ height: 190, objectFit: 'cover', width: "100%" }} />
                    <Text style={{ fontSize: 20, color: 'white', bottom: 35, marginBottom: -15, alignSelf: 'center' }}>Before</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/public/after.png')} style={{ height: 190, objectFit: 'cover', width: "100%" }} />
                    <Text style={{ fontSize: 20, color: 'white', bottom: 35, marginBottom: -15, alignSelf: 'center' }}>After</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, gap: 15 }}>
                <TouchableOpacity onPress={toggleLike}>
                    <LikeIcon filled={liked} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CommentIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sharePost()}>
                    <ShareIcon />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                <Image source={require('../assets/images/public/testProfile.png')}
                    style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 100, }} />
                <Image source={require('../assets/images/public/testProfile.png')}
                    style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 100, right: 15 }} />
                <Image source={require('../assets/images/public/testProfile.png')}
                    style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 100, right: 30 }} />
                <Text style={{ color: "#828282", fontWeight: "400", fontSize: 14, marginLeft: -18 }}>
                    114 Appreciations
                </Text>
            </View>
            <Text style={{ fontWeight: "400", fontSize: 14, paddingHorizontal: 20, marginTop: 7, marginBottom: 2 }}>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a spectrum. </Text>
            <Text style={{ fontWeight: "500", fontSize: 16, paddingHorizontal: 20, }}>
                View 34 Reviews
            </Text>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Image source={require('../assets/images/public/testProfile.png')}
                    style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 100, }} />
                <Text style={{ color: "#828282", fontWeight: "400", fontSize: 14, }}>Add your review...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileBar: {
        elevation: 1,
        backgroundColor: 'white',
        height: 'auto',
        paddingVertical: 20,
        width: '100%',
        gap: 12,
    },
})