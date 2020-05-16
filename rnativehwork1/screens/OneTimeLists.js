import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { connect } from "react-redux";
import { getLists } from "../redux/data";
import { ListCard } from "../components";
import COLORS from '../styles/colors';
import {CustomText} from '../components/CustomText';
import { useNavigation } from "@react-navigation/native";
const mapStateToProps = (state) => ({
  lists: getLists(state),
});

export const OneTimeLists = connect(mapStateToProps)((props) => {
  const { navigation, lists } = props;
  const navigations = useNavigation();
  return (
 
      <ScrollView style={styles.container}>
        <View style = {styles.header}>
          <CustomText weight = "medium" style = {styles.headerText}>One Time Lists</CustomText>
          <FontAwesome onPress = {navigations.openDrawer} name="bars" size={30} color="white" />
        </View>
        <View style={styles.listsList}>
          {lists
          .filter((list) => list.status === "onetime")
          .map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </View>
      </ScrollView>
  
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  listsList: {
    marginVertical: 22,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
   
  },
  headerText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 72,
    marginRight: 72,
    // marginTop: 22,
  },
  header: {
    backgroundColor: COLORS.red,
    paddingVertical: 42,
    flexDirection: "row",
    alignItems: "center",
    
    justifyContent: "space-around",
    paddingRight: 16,
    paddingLeft: 40,
  }
});
