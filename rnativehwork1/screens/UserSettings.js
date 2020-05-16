import React, { useState, useContext } from 'react';
import { 
    View, 
    StyleSheet, 
    AsyncStorage, 
    TouchableWithoutFeedback, 
    Keyboard,
    Button 
} from 'react-native';

import { CustomText, CustomField, CustomBtn } from '../components';
import COLORS from '../styles/colors';
import { TextInput } from 'react-native-gesture-handler';

export const UserSettings = (route) => {
   
    const [fields, setFields] = useState({
        username: "",
        imgUrl: "",
    });

    const saveBtnHandler =  () => {
        console.log("username: ", fields.username);
        console.log("img: ", fields.imgUrl);
    };

    const fieldChangneHandler = (name, value) => {
        setFields((fields) => ({
            ...fields,
            [name]: value,
        }));
    };

    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <View style = {styles.header}>
                <CustomText weight = "medium" style = {styles.headerText}>User Settings</CustomText>
            </View >
            <View style={styles.horizontal}>
                <View style={styles.userField}>
                    <CustomText weight="medium" style={styles.fieldLabel}>
                        username
                    </CustomText>
                    <TextInput
                        style={styles.field} 
                        placeholder="username"
                        placeholderTextColor={COLORS.black}
                        value={fields.username}
                        onChangeText={(val) => fieldChangneHandler("username", val)}
                    />
                    <CustomText weight="medium" style={styles.fieldLabel}>
                        avatar url
                    </CustomText>
                    <TextInput
                        style={styles.field} 
                        placeholder="https://www.image.com/image.jpg"
                        placeholderTextColor= {COLORS.black}
                        value={fields.imgUrl}
                        onChangeText={(val) => fieldChangneHandler("imgUrl", val)}
                    />
                    <CustomBtn 
                        title="Save Changes" 
                        style={styles.saveBtn}
                        onPress={saveBtnHandler}
                    />
 
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        backgroundColor: COLORS.red,
        paddingVertical: 42,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingRight: 16,
        paddingLeft: 40,
      },
    headerText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginLeft: 72,
        marginRight: 72,
        // marginTop: 22,
      },
    userField: {
        marginVertical: 22,
        paddingVertical: 20,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        alignItems: "center",
    },
    fieldLabel: {
        fontSize: 12,
        paddingVertical: 10,
        color: COLORS.black,
    },
    field: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 40,
        fontSize: 18,
        paddingVertical: 10,
        textAlign: "center", 
        marginBottom: 15,
        width: "90%",
    }, 
    saveBtn: {
        backgroundColor: COLORS.red, 
    },
    
     
});