import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const ProductCard = ({
  title,
  listID,
  productID,
  clickable = true,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SingleList", { listID, productID });
      }}
      disabled={!clickable}
    >
      <View style={[styles.projectCard, style]}>
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.projectCardGradient}
        />
        <Text style={styles.projectCardName}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
})