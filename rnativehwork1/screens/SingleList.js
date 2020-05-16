import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { CustomText} from '../components/CustomText';

import { getLists } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';


const mapStateToProps = (state) => ({
    lists: getLists(state),
});



export const SingleList = connect(mapStateToProps)((props) => {

    const { navigation, lists, products = [] } = props;



    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.body}>
                <TouchableOpacity style={styles.resetBtn}>
                    <CustomText weight="bold" style={styles.resetBtnTitle}>
                        Reset
                    </CustomText>
                </TouchableOpacity>
                {lists.map((list) => (
                    <View  style={styles.list}>
                        <FlatList 
                            data={list.products}
                            renderItem={({item}) => (
                                <View key={item.id} style={styles.productsList}>
                                    <CustomText style={styles.name}>{item.text}</CustomText>
                                    <View style={styles.row}>
                                        <CustomText style={styles.count}>x{item.count}</CustomText>
                                        <CustomText style={styles.unit}>{item.unit}</CustomText>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
       
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        marginTop: -24,
        paddingHorizontal: 16,
    },
    resetBtn: {
        backgroundColor: COLORS.red,
        borderRadius: 50,
        marginTop: 10,
        width: 100,
        marginBottom: 15,
    },
    resetBtnTitle: {
        color: "white",
        fontSize: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        textTransform: 'uppercase',
    },
    productsList: {
        borderWidth: 2,
        marginBottom: 10,
        borderColor: COLORS.yellow,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingVertical: 7,
    },
    name: {
        paddingLeft: 17,
        fontSize: 14,
    },
    count: {
        fontSize: 14,
        paddingRight: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 17,
    }

});




// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";

// import { connect } from "react-redux";
// import { getLists } from "../redux/data";
// import { ProductsList} from "../components";
// import COLORS from '../styles/colors';
// import {CustomText} from '../components/CustomText';
// import { useNavigation } from "@react-navigation/native";
// const mapStateToProps = (state) => ({
//   lists: getLists(state),
// });

// export const SingleList = connect(mapStateToProps)((props) => {
//   const { navigation, lists } = props;
//   const navigations = useNavigation();
//   return (
 
//       <ScrollView style={styles.container}>
//         <View style = {styles.header}>
//           <CustomText weight = "medium" style = {styles.headerText}>One Time Lists</CustomText>
//         </View>
//         <View style={styles.listsList}>
//           {lists
//           .map((list) => (
            
//             <ProductsList key={list.id} list={list} />
//           ))}
//         </View>
//       </ScrollView>
  
//   );
// });

// const styles = StyleSheet.create({})


// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import COLORS from '../styles/colors';
// import {CustomText} from '../components/CustomText';
// import {ProductCard} from '../components';

// export const SingleList = ({ list2, listID, productID, clickable = true}) => {
//   const navigation = useNavigation();
//   const {  products } = list2;
//   const productsCount = products.length;

//   return (
//     <TouchableOpacity
//       // onPress={() => {
//       //   navigation.navigate("SingleList", { listID, productID });
//       // }}
//       // disabled={!clickable}
//     >

//     <View style={styles.container}>
//       <View style = {styles.listWrapper}>
//         <View style={styles.row}>
//         <CustomText weight = "medium" style={styles.heading}>{name}</CustomText>
//         <CustomText weight = "medium" style={styles.count}>{productsCount}/10</CustomText>
//         {/* <TouchableOpacity style={styles.listBtn}>
//           <Image style={styles.listBtnImg}/>
//         </TouchableOpacity> */}
        
//       </View>
//       </View>
    

//       <FlatList
//         contentContainerStyle={styles.projectsList}
//         data={products}
//         renderItem={({ item }) => (
//           <ProductCard
//             title = {item.text}
//             listID={list2.id}
//             projectID={item.id}
//           />
//         )}
//       />

//     </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({


// });



// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// import { connect } from "react-redux";
// import {
//   getLists,
//     toggleProduct
// } from "../redux/data";
// import { ProductCard } from "../components";
// const mapStateToProps = (state) => ({
//     lists: getLists(state),
//   });
// export const SingleList = connect(mapStateToProps)((props) => {
//     const { navigation, lists, listID } = props;
    
    
//   const {title, products = [] } =
//     lists
//       .find((list) => list.id === listID)
//      ;

//   const sortedProducts = products.sort((a, b) => {
//     if (a.done === b.done) return 0;
//     if (a.done) return 1;
//     if (b.done) return -1;
//   });


//   return (
//     <View style={styles.container}>
//       {/* <Nav back={true} /> */}
//       <View style={styles.projectContent}>
//       <ProductCard
//           title={title}
          
//         />

        
//         {/* <FlatList
//           contentContainerStyle={styles.list}
//           data={sortedTodos}
//           renderItem={({ item }) => (
//             <View style={styles.todoItemWrapper}>
//               <TouchableOpacity
//                 onPress={() =>
//                   toggleTodoState({
//                     sectionID,
//                     projectID,
//                     todoID: item.id,
//                   })
//                 }
//                 onLongPress={() => handleTodoLongPress(item.id)}
//               >
//                 <View
//                   style={[styles.todoItem, { opacity: item.done ? 0.5 : 1 }]}
//                 >
//                   <Text>{item.text}</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           )}
//         /> */}
//       </View>
//     </View>
//   );
// });

// const styles = StyleSheet.create({
// })

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// import { connect } from "react-redux";
// import {
//   getLists,
  
// } from "../redux/data";
// import { ProductCard} from "../components";

// const mapStateToProps = (state) => ({
//   lists: getLists(state),
// });

// export const SingleList = connect(mapStateToProps)(({ route, lists}) => {
//   const {
//     params: { listID,productID },
//   } = route;


//   const { text , products = [] } =
//     lists
//       .find((list) => list.id === listID)
//      ;

//   return (
//     <View style={styles.container}>
 
//       <View style={styles.projectContent}>
//         <ProductCard
//           title={text}
          
//           style={styles.card}
//           clickable={false}
//         />
      

       
//       </View>
//     </View>
//   );
// });

// const styles = StyleSheet.create({
// })