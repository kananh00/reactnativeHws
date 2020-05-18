import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import {
  getLists,
  
} from "../redux/data";
import { ProductCard} from "../components";
import COLORS from '../styles/colors';
import {CustomText} from '../components';
import { useNavigation } from "@react-navigation/native";
const mapStateToProps = (state) => ({
  lists: getLists(state),
});

export const SingleList = connect(mapStateToProps)((props) => {
  const {route, navigation, products=[]} = props;
  const navigations = useNavigation();
  // const products = route.params.products;
  const name = route.params.name;
  const listID = route.listID;

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <MaterialIcons onPress = {navigations.goBack} name="arrow-back" size={24} color="white" />
      <CustomText weight = "medium" style = {styles.headerText}>{name}</CustomText>
      <MaterialIcons name="edit" size={24} color="white" />
        </View>
      <View style={styles.productContent}>
        <TouchableOpacity style={styles.resetBtn}>
          <CustomText weight="bold" style={styles.btnText}>Reset</CustomText>
        </TouchableOpacity>
        <FlatList
          data = {products}
          renderItem={({item}) => (
            <ProductCard
            text={item.text}
            count = {item.count}
            unit ={item.unit}
            />
        )}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  headerText: {
    color: "white",
    fontSize: 18,
    
    // marginTop: 22,
  },
 
  header: {
    backgroundColor: COLORS.red,
    paddingVertical: 42,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
   
 
  },
  productContent: {
    marginVertical: 22,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  resetBtn: {
            backgroundColor: COLORS.red,
            borderRadius: 40,
            width: 70,
            marginBottom: 15,
            marginLeft: 17,
        },
  btnText: {
            color: "white",
            textTransform: 'uppercase',
            textAlign: "center",
            fontSize: 10,
            paddingVertical: 6,
            
  },
})

