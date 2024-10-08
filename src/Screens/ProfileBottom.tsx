import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Account from "../components/Account";
import Other from "../components/Other";
import Toggle from "../components/Toggle";
// import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
// import { useCameraPermissions } from 'expo-camera';
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ProfileBottom = () => {
    const [image, setImage] = useState<string | null>(null);
    // const [permission, requestPermission] = useCameraPermissions();
    const [modal, setModal] = useState(false);

    const select = async () => {
        setModal(!modal);
    }

    // const goCamera = async () => {
    //     if (!permission.granted) {
    //         await requestPermission();
    //         return;
    //     }
    //     if (permission.granted) {
    //         const result = await ImagePicker.launchCameraAsync({
    //             allowsEditing: true,
    //             aspect: [4, 3],
    //             quality: 1,
    //         });

    //         if (!result.canceled) {
    //             setImage(result.assets[0].uri);
    //         }
    //     }
    //     setModal(false);
    // }

    // const goGallery = async () => {
    //     // let result = await ImagePicker.launchImageLibraryAsync({
    //     //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     //     allowsEditing: true,
    //     //     aspect: [4, 3],
    //     //     quality: 1,
    //     // });
    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //     }
    //     setModal(false);
    // }

    return (
        <View style={styles.container}>
            <Header title={"Profile"} />
            <Modal
                isVisible={modal}
                style={styles.modal}
                onBackdropPress={() => setModal(false)}
            >
                <View style={styles.modalContent}>
                    {/* <Image source={{ uri: image }} style={styles.editImage} /> */}
                    <View style={styles.editProfile}>
                        {/* <TouchableOpacity style={styles.inView} onPress={goCamera}>
                            <Ionicons name="camera" size={30} />
                            <Text style={styles.label}>Camera</Text>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity style={styles.inView} onPress={goGallery}>
                            <FontAwesome name="photo" size={28} color="black" />
                            <Text style={styles.label}>Gallery</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.innerContainer}>
                    <View style={styles.intro}>
                        <TouchableOpacity onPress={select} style={styles.image}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.profileImage} />
                            ) : (
                                <Text style={styles.addPhotoText}>Add Photo</Text>
                            )}
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.name}>Aidrin Varghese</Text>
                        </View>
                        <TouchableOpacity style={styles.edit}>
                            <Text style={styles.text}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detail}>
                        <Detail value={180} label={'Height'} measure={"cm"} />
                        <Detail value={65} label={"weight"} measure={"kg"} />
                        <Detail value={22} label={"age"} measure={"yo"} />
                    </View>
                    <Account />
                    <Toggle />
                    <Other />
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileBottom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        maxHeight: '60%',
    },
    editImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    editProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
    },
    inView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        marginTop:40
    },
    intro: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 9,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
    },
    image: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    addPhotoText: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 60, // Center the text vertically
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
    },
    edit: {
        backgroundColor: '#8862F3',
        padding: 6,
        borderRadius: 15,
        paddingHorizontal: 18,
    },
    text: {
        color: 'white',
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
