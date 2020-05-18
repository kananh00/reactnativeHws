import React, { useState, useContext } from 'react';
import { 
    View, 
    StyleSheet, 
    AsyncStorage, 
    TouchableWithoutFeedback, 
    Keyboard,
    Button,
    TextInput,
    Alert,
} from 'react-native';

import { CustomText, CustomBtn } from '../components';
import COLORS from '../styles/colors';
import { AuthCTX } from "../context/auth";
import { useNavigation } from "@react-navigation/native";
export const UserSettings = ({ navigation, route }) => {
    const { createUser } = useContext(AuthCTX);
    const [fields, setFields] = useState({
        username: route.params?.username || "",
        imgUri: route.params?.imgUri || "",
      });
      const navigations = useNavigation();

    const handleSave = async () => {
        const result = await createUser(fields.username);
        if (result.user) {
            Alert.alert("created new user");
        }
      };
    
    const fieldChangeHandler = (name, value) => {
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
                        <CustomText weight="medium" style={styles.fieldLabel}>username</CustomText>
                        <TextInput
                            style={styles.field} 
                            placeholder="username"
                            placeholderTextColor={COLORS.black}
                            value={fields.username}
                            onChangeText={(value) => fieldChangeHandler("username", value)}
                        />
                        <CustomText weight="medium" style={styles.fieldLabel}>avatar url</CustomText>
                        <TextInput
                            style={styles.field} 
                            placeholder="https://www.image.com/image.jpg"
                            placeholderTextColor= {COLORS.black}
                            value={fields.imgUri}
                            onChangeText={(value) => fieldChangeHandler("imgUri", value)}
                        />
                        <CustomBtn 
                            style={styles.saveBtn}
                            name="Save Changes" 
                            onPress={handleSave}
                        />
                    {/* <Button title = "save" onPress={handleSave}/> */}
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
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        alignItems: "center",
    },
    fieldLabel: {
        fontSize: 12,
        paddingVertical: 17,
        color: COLORS.black,
    },
    field: {
        backgroundColor: COLORS.lightGray,
        textAlign: "center",
        width: "90%",
        borderRadius: 40,
        fontSize: 18,
        paddingVertical: 12,
    }, 
    saveBtn: {
        marginTop: 17,
        backgroundColor: COLORS.red, 
    },
    
     
});