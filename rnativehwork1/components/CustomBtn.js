import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { CustomText } from './CustomText';

export const CustomBtn = ({ name, style, onPress}) => {
    return(
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <CustomText weight="bold" style={styles.btnName}>{name}</CustomText>
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
    btnName: {
        color: "white",
        fontSize: 14,
        paddingVertical: 12,
        textTransform: "uppercase",
        textAlign: "center",
    },
});