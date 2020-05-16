import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import COLORS from '../styles/colors';
import {CustomText} from './';
export const CustomField = ({ placeholder, onChangeText, value, placeholderTextColor, style}) => {
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
          <CustomText weight = "medium" style = {styles.headerText}>User Settings</CustomText>
        
        </View >
        <View style = {styles.userField}>
            <TextInput
                placeholder={placeholder}
                style={[styles.field, style]}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            /></View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    field: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 45,
        paddingVertical: 8,
        textAlign: "center", 
        marginBottom: 15,
        //paddingHorizontal: "32%",
        //width: "100%",
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
        fontSize: 16,
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
       
      },
});