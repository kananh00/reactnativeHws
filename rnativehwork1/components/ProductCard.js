import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const ProductCard = ({
  text,
  count,
  unit,
  listID,
  productID,
  clickable = true,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    >
      <View style={styles.productCard}>
        <Text style={styles.productName}>{text}</Text>
        <Text style={styles.productCount}>{count}</Text>
        <Text style={styles.productUnit}>{unit}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
})