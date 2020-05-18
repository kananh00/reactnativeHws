import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import {CustomBtn} from '../components/CustomBtn';
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

export const SingleListEdit = connect(mapStateToProps)((props) => {
  const {route, } = props;
  const navigations = useNavigation();
  // const products = route.params.products;
  const name = route.params.name;
  const listID = route.listID;

  
  const [unit, setUnit] = useState("pkg");
  const [count, setCount] = useState("1");
  const [fields, setFields] = useState({
      shopListID: "",
      name: "",
      unit: "pkg",
      count: "1",
  });

  const fieldChangeHandler = (name, value) => {
      setFields((fields) => ({
          ...fields,
          [name]: value,
      }));
  };
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <MaterialIcons onPress = {navigations.goBack} name="arrow-back" size={24} color="white" />
      <CustomText weight = "medium" style = {styles.headerText}>{name}</CustomText>
      <Feather onPress = {() => navigations.navigate("SingleList")} name="save" size={24} color="white" />
        </View>
        <View style={styles.addContent}>
            <View style = {styles.newProductLabel}>
                <CustomText weight="medium" style={styles.productfieldname}>position name</CustomText>
                <CustomText weight="medium" style={styles.countfieldname}>count</CustomText>
            </View>

            <View style = {styles.newProduct}>
                        <TextInput
                            style={styles.productfield} 
                            placeholder="product"
                            placeholderTextColor={COLORS.black}
                            value={fields.name}
                            onChangeText={(value) => fieldChangeHandler("name", value)}
                        />
            <View style = {styles.count}>
                <CustomText weight="medium">+</CustomText>
                <TextInput
                            style={styles.countfield} 
                            placeholder="1"
                            placeholderTextColor={COLORS.black}
                            value={fields.count}
                            onChangeText={(value) => fieldChangeHandler("count", value)}
                        />
                <CustomText weight="medium">-</CustomText>
            </View>
                        
            </View>
            <View style = {styles.productUnitFields}>
                        <TouchableOpacity 
                            style={[styles.unitSelection, { backgroundColor: unit === "pkg" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]} 
                            onPress={() => setUnit("pkg")}
                        >
                            <Text style={[ styles.unitName, { fontWeight: unit === "pkg" ? "bold" : "400" }]}>
                                pkg
                            </Text>
                        </TouchableOpacity>  

                        <TouchableOpacity 
                            style={[styles.unitSelection, { backgroundColor: unit === "kg" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]} 
                            onPress={() => setUnit("kg")}
                        >
                            <Text style={[ styles.unitName, { fontWeight: unit === "kg" ? "bold" : "400" }]}>
                                kg
                            </Text>
                        </TouchableOpacity>  

                        <TouchableOpacity 
                            style={[styles.unitSelection, { backgroundColor: unit === "litre" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]} 
                            onPress={() => setUnit("litre")}
                        >
                            <Text style={[ styles.unitName, { fontWeight: unit === "litre" ? "bold" : "400" }]}>
                                litre
                            </Text>
                        </TouchableOpacity>  

                        <TouchableOpacity 
                            style={[styles.unitSelection, { backgroundColor: unit === "bott" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]} 
                            onPress={() => setUnit("bott")}
                        >
                            <Text style={[ styles.unitName, { fontWeight: unit === "bott" ? "bold" : "400" }]}>
                                bott
                            </Text>
                        </TouchableOpacity>  

            </View>
            <CustomBtn 
                        style={styles.btn}
                        name="Add to List" 
                        
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
  addContent: {
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
  newProduct: {
      flexDirection: "row",
  },
  newProductLabel: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  productfield: {
    backgroundColor: COLORS.lightGray,
    textAlign: "center",
    width: "60%",
    borderRadius: 40,
    fontSize: 18,
    paddingVertical: 12,
    marginLeft: 13,
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: COLORS.lightGray,
    textAlign: "center",
    width: "30%",
    borderRadius: 40,
    fontSize: 18,
    paddingVertical: 12,
    marginLeft: 10,
  },
  productfieldname: {
      marginRight: "35%",
      
  },
 
  productUnitFields: {
    flexDirection: "row", 
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    width: "90%"
  },
  unitSelection: {
    backgroundColor: COLORS.lightGray,
    width: "24%",
    alignItems: 'center',

    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 17,
    marginTop: 17,
  },
  btn: {
    backgroundColor: COLORS.red,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    },
})