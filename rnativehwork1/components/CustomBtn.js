import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';

export const CustomBtn = ({ title, style, onPress}) => {
    return(
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <CustomText weight="bold" style={styles.text}>
                        {title}
                    </CustomText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        borderRadius: 40,
        overflow: "hidden",
        
    },
    text: {
        color: "white",
        fontSize: 14,
        paddingVertical: 12,
        textTransform: "uppercase",
        textAlign: "center",
    },
});