import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import COLORS from '../styles/colors';
import {CustomText} from '../components/CustomText';
import {ProductCard} from './';

export const ListCard = ({ list, listID, productID, clickable = true}) => {
  const navigation = useNavigation();
  const { name, products } = list;
  const productsCount = products.length;

  return (
    <TouchableOpacity
       onPress={() => {
        navigation.navigate("SingleList", { listID, productID });
      }}
       disabled={!clickable}
    >

    <View style={styles.container}>
      <View style = {styles.listWrapper}>
        <View style={styles.row}>
        <CustomText weight = "medium" style={styles.heading}>{name}</CustomText>
        <CustomText weight = "medium" style={styles.count}>{productsCount}/10</CustomText>
        {/* <TouchableOpacity style={styles.listBtn}>
          <Image style={styles.listBtnImg}/>
        </TouchableOpacity> */}
        
      </View>
      
    

      <FlatList
        contentContainerStyle={styles.projectsList}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            // title = {item.text}
            // listID={list.id}
            productID={item.id}
          />
        )}
      />
</View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // container: {
  // flex: 1,
  // backgroundColor: "white",
  // },
  listWrapper: {
    borderWidth: 2,
    borderColor: COLORS.yellow,
    borderRadius: 8,
    color:  COLORS.black,
    marginLeft: 16, 
    marginRight: 16,
    marginVertical: 13,
  },
  row: {
    height: 76,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  count: {
    fontSize: 14,
    fontWeight: "bold",
    color:  COLORS.black,
  },
 
 

});
