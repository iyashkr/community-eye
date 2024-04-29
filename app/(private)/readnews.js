import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CarretLeft } from '../../components/icons';
import Swiper from 'react-native-swiper';
import { router } from 'expo-router';

export default function Readnews() {

    const newsData = [
        {
            id: 1,
            image: "https://picsum.photos/370/260?grayscale",
            title: 'Check latest laws implemented by Indora police for public safety.',
            description: "The Indore police have recently implemented several new laws aimed at bolstering public safety within the community.These measures are part of a concerted effort to enhance law enforcement practices and ensure the well- being of residents.Key initiatives include stricter penalties for traffic violations to deter reckless driving and reduce road accidents.Additionally, there are heightened enforcement measures targeting public order offenses, such as noise disturbances and public intoxication, to maintain peace and tranquility in residential areas. Stay informed for further updates on these important developments.",
            timestamp: 'Few hours ago'
        },
        {
            id: 2,
            image: "https://picsum.photos/id/55/370/260",
            title: 'New educational reforms announced by the government.',
            description: "In a significant move, the government has unveiled sweeping educational reforms aimed at revolutionizing the nation's learning landscape. These reforms encompass a wide array of measures designed to enhance the quality and accessibility of education for all. Key initiatives include curriculum updates to align with evolving industry needs, the integration of technology in classrooms, and the expansion of vocational training opportunities. Additionally, efforts are underway to improve teacher training and support, ensuring educators are equipped with the necessary tools to foster student success. ",
            timestamp: 'Few hours ago'
        },
        {
            id: 3,
            image: "https://picsum.photos/id/100/370/260",
            title: 'Launch of new healthcare initiative to combat COVID-19.',
            description: 'Amidst ongoing efforts to combat the COVID-19 pandemic, a groundbreaking healthcare initiative has been unveiled. With the launch of this new program, communities are set to receive enhanced support and resources in the fight against the virus. The initiative aims to bolster vaccination efforts, expand access to testing and treatment facilities, and promote public awareness on preventive measures. Through collaborative efforts between healthcare authorities, government agencies, and community stakeholders, the program endeavors to mitigate the spread of COVID-19 and safeguard public health.',
            timestamp: 'Yesterday'
        },
        {
            id: 4,
            image: "https://picsum.photos/id/400/370/260",
            title: 'Traffic advisory for upcoming festival season.',
            description: "As the festive season approaches, motorists are advised to heed important traffic advisories. With an influx of travelers and increased activity on the roads, authorities are implementing measures to ensure smooth traffic flow and safety for all. Drivers are urged to plan their routes in advance, anticipate delays, and adhere to speed limits and traffic regulations. Additionally, heightened vigilance and patience are encouraged to navigate through potentially congested areas. Stay informed and drive responsibly to enjoy a hassle-free journey during this festive season.",
            timestamp: 'Yesterday'
        },
        {
            id: 5,
            image: "https://picsum.photos/id/500/370/260",
            title: 'Local sports club announces upcoming tournaments.',
            description: "Exciting news from the local sports scene! The renowned local sports club has officially announced its upcoming tournaments, promising a thrilling showcase of athletic prowess and community spirit. Athletes and enthusiasts alike are eagerly anticipating the chance to compete and cheer on their favorite teams. With a diverse range of sports on offer, from basketball to soccer and everything in between, there's something for everyone to enjoy.Stay tuned for further updates as the anticipation builds for these highly anticipated events!",
            timestamp: 'Aug 24, 2022'
        },
        {
            id: 6,
            image: "https://picsum.photos/id/26/370/260",
            title: 'New store opening in downtown area with special discounts.',
            description: "Exciting news for shoppers in Navi Mumbai! A new store is set to open its doors in the vibrant retail landscape, offering residents a wealth of shopping opportunities and exclusive discounts. With its grand unveiling, shoppers can expect to explore a diverse range of products and services, from fashion and electronics to household essentials and more. The store aims to provide a unique shopping experience tailored to the needs and preferences of local residents, with special discounts and promotions available. Don't miss out on this fantastic opportunity to discover new treasures and enjoy unbeatable savings in the heart of Navi Mumbai's bustling retail scene.",
            timestamp: 'Aug 23, 2024'
        },
        {
            id: 7,
            image: "https://picsum.photos/id/143/370/260",
            title: 'Community clean-up event organized by local volunteers.',
            description: "In a commendable display of community spirit, local volunteers in Jalandhar have organized a community clean-up event to beautify and preserve the city's environment. This collaborative effort aims to engage residents in hands-on activities to clean up littered areas, remove debris, and promote environmental awareness.  Through collective action and community involvement, this clean-up event serves as a testament to the power of unity in creating a cleaner, greener future for Jalandhar. Join hands with fellow volunteers and be a part of this impactful initiative to make a difference in your community.",
            timestamp: 'Aug 22, 2022'
        },
        {
            id: 8,
            image: "https://picsum.photos/id/110/370/260",
            title: 'Celebration of World Environment Day at Green Park.',
            description: "Green Park in New Delhi is gearing up for a momentous celebration in honor of World Environment Day. This special occasion promises to be a vibrant and meaningful event, bringing together environmental enthusiasts, activists, and community members to raise awareness about pressing environmental issues and promote sustainable living practices. With a focus on fostering appreciation for nature and inspiring action towards a greener future, the celebration at Green Park serves as a rallying point for collective efforts to protect and preserve our planet. Join in the festivities and be a part of this inspiring movement towards environmental stewardship and sustainability.",
            timestamp: 'Aug 21, 2022'
        },
        {
            id: 9,
            image: "https://picsum.photos/id/292/370/260",
            title: 'Food festival featuring diverse cuisines from around the world.',
            description: "Get ready to embark on a tantalizing culinary journey as the city gears up for a spectacular food festival showcasing an array of diverse cuisines from around the world. This gastronomic extravaganza promises a feast for the senses, with an eclectic selection of dishes representing the rich and varied culinary traditions of different cultures. From mouthwatering street food delights to gourmet specialties, attendees can indulge in a kaleidoscope of flavors, textures, and aromas. Immerse yourself in the vibrant ambiance, savoring each bite as you explore the tantalizing offerings from renowned chefs and local vendors alike",
            timestamp: 'Aug 20, 2022'
        },
        {
            id: 10,
            image: "https://picsum.photos/id/444/370/260",
            title: 'Book fair showcasing latest literary works and authors.',
            description: "Calling all book lovers! A captivating book fair is set to take place in the heart of the city, offering a treasure trove of literary delights for avid readers and enthusiasts. The fair will feature a diverse selection of books spanning various genres, from fiction and non-fiction to poetry and children's literature. Attendees can look forward to engaging with renowned authors, discovering new releases, and exploring literary discussions and workshops. Whether you're a seasoned bibliophile or a casual reader, the book fair promises an enriching and inspiring experience for all. Don't miss this opportunity to celebrate the written word and immerse yourself in the world of books.",
            timestamp: 'Aug 19, 2022'
        }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Swiper loop={false} showsPagination={false}>
                {newsData.map((newsItem, index) => (
                    <View key={index} style={{ height: "100%" }}>
                        <Image style={styles.image} source={{ uri: newsItem.image }} />
                        <TouchableOpacity style={styles.carret} activeOpacity={0.7} onPress={() => router.back()}>
                            <CarretLeft />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: -20 }}>
                            <View style={styles.tabBar}>
                                <Text style={{ color: "#969696", fontSize: 16 }}>Rules & Regulations</Text>
                            </View>
                            <Text>{newsItem.timestamp}</Text>
                        </View>

                        {/* News */}
                        < View style={{ margin: 20, gap: 20 }}>
                            {/* Title */}
                            <Text style={{ fontSize: 20 }}>{newsItem.title}</Text>
                            {/* Description */}
                            <Text style={{ color: "#969696" }}>{newsItem.description}</Text>
                        </View>
                        <View style={styles.swipeBtn}>
                            <Text style={{}}>Swipe right to know more</Text>
                        </View>
                    </View>
                ))
                }
            </Swiper >
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F9FD',
    },
    image: {
        width: '100%',
        height: 260,
    },
    carret: {
        bottom: 250, height: 50,
        backgroundColor: '#FFFFFF26',
        width: 50, borderRadius: 25,
        marginHorizontal: 10,
    },
    tabBar: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 17,
        marginBottom: 1,
    },
    swipeBtn: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#3278C5",
        bottom: 0,
        padding: 10,
        borderRadius: 25,
        width: '60%',
    }
});