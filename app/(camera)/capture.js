import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { router } from 'expo-router';
import { CarretLeft, Tick } from '../../components/icons';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    // Request camera permissions
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Handle image capture
    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setCapturedImage(photo.uri);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setCapturedImage(result.uri);
        }
    };

    const retakePicture = () => {
        setCapturedImage(null);
    };

    // Handle image save
    const savePicture = () => {
        // Logic to save the picture and navigate to the next page
        router.navigate('/complaintform');
    };

    // Render camera or captured image
    return (
        <View style={styles.container}>
            {hasPermission === null ? (
                <Text>Requesting Camera Permission</Text>
            ) : hasPermission === false ? (
                <Text>No access to camera</Text>
            ) : capturedImage === null ? (
                <Camera style={styles.camera} ref={cameraRef} />
            ) : (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: capturedImage }} style={styles.image} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={retakePicture}>
                            <CarretLeft />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={savePicture}>
                            <Tick />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {capturedImage === null && (
                <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        top: 20, // Adjust top position as needed
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
    },
    captureButton: {
        position: 'absolute',
        bottom: "12%",
        alignSelf: 'center',
        backgroundColor: '#FCB226',
        borderRadius: 30,
        height: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 5,
        width: 100,
        padding: 15,
    },
});
