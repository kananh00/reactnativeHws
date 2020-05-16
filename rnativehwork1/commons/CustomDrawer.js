import React, { useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';


import COLORS from '../styles/colors';
import images from '../styles/images';
import { CustomText } from '../components/CustomText';

export const CustomDrawer = ({ navigation  }) => {
    return(
        <View style={styles.container}>
            <View style={styles.user}>
                <Image style={styles.userImg} source={images.avatar} /> 
                <CustomText style={styles.username}>username</CustomText>  
            </View>  

            <View style={styles.drawerButtonWrapper}> 
                <TouchableOpacity 
                    style={[styles.drawerBtn, styles.drawerFirstBtn]} 
                    onPress={() => navigation.navigate("AddNewList", {})}>
                    <CustomText weight = "bold" style={styles.drawerBtnLabel}>
                        Add New List
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.drawerBtn} 
                    onPress={() => navigation.navigate("OneTimeLists", {})}>
                    <CustomText weight = "bold" style={styles.drawerBtnLabel}>
                        One Time List
                    </CustomText>
                </TouchableOpacity>
                   
                <TouchableOpacity 
                    style={styles.drawerBtn} 
                    onPress={() => navigation.navigate("RegularTimeLists", {})}>
                    <CustomText weight = "bold" style={styles.drawerBtnLabel}>
                        Regular List
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.drawerBtn} 
                    onPress={() => navigation.navigate("UserSettings")}>
                    <CustomText weight = "bold" style={styles.drawerBtnLabel}>
                        User Settings
                    </CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    user: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 30,
    },
    username: {
        color: "gray",
        textAlign: 'center',
        fontSize: 24,
    },
    userImg: {
        width: 50,
        height: 50,  
        marginHorizontal: 20,
        borderWidth: 3,
        borderRadius: 100,
        borderColor: COLORS.red,
    },
    drawerButtonWrapper: {
        flex: 1,
        backgroundColor: COLORS.red,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        marginTop: 16,
        overflow: "hidden",
    },
    drawerBtn: {  
        marginTop: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        marginLeft: 16,
        marginRight: 16,
        borderColor: "transparent", 
        backgroundColor: "white",
        borderRadius: 30,   
    },
    drawerFirstBtn: { 
        marginBottom: 25, 
        marginTop: 16, 
    },
    drawerBtnLabel: {
        textAlign: "center",
        backgroundColor: "white",
        textTransform: "uppercase",
        color: COLORS.red,
        alignItems: "center",
        fontSize: 14,
        paddingVertical: 8,
    },

});