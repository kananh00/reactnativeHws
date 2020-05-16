// // import React from "react";
// // import {
// //   StyleSheet,
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   FlatList,
// // } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { useNavigation } from "@react-navigation/native";
// // // import images from "../style/images";

// // // import { ProjectCard } from "./";

// // export const ProductsList = ({ product }) => {
// //   const navigation = useNavigation();
// //   const { name, projects } = section;
// // //   const projectsCount = projects.length;

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.row}>
// //         <Text style={styles.heading}>{name}</Text>
// //         {/* <Text style={styles.count}>{projectsCount}</Text> */}
// //         {/* <TouchableOpacity style={styles.listBtn}>
// //           <Image style={styles.listBtnImg} source={images.dots} />
// //         </TouchableOpacity> */}
// //       </View>

// //       {/* <FlatList
// //         contentContainerStyle={styles.projectsList}
// //         horizontal={true}
// //         data={projects}
// //         renderItem={({ item }) => (
// //           <ProjectCard
// //             title={item.name}
// //             image={item.imgUri}
// //             sectionID={section.id}
// //             projectID={item.id}
// //           />
// //         )}
// //       /> */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({

// // })


// // import React from 'react';
// // import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
// // import { CustomText} from '../components/CustomText';

// // import COLORS from '../styles/colors';
// // export const ProductsList = ({ list }) => {
// //     const navigation = useNavigation();
// //     const { products } = list;
// //     return(
// //         <ScrollView style={styles.container}>
            
// //             <View style={styles.body}>
// //                 <TouchableOpacity style={styles.resetBtn}>
// //                     <CustomText weight="bold" style={styles.resetBtnTitle}>
// //                         Reset
// //                     </CustomText>
// //                 </TouchableOpacity>
// //                 {lists.map((list) => (
// //                     <View  style={styles.list}>
// //                         <FlatList 
// //                             data={products}
// //                             renderItem={({item}) => (
// //                                 <View key={item.id} style={styles.productsList}>
// //                                     <CustomText style={styles.name}>{item.text}</CustomText>
// //                                     <View style={styles.row}>
// //                                         <CustomText style={styles.count}>x{item.count}</CustomText>
// //                                         <CustomText style={styles.unit}>{item.unit}</CustomText>
// //                                     </View>
// //                                 </View>
// //                             )}
// //                         />
// //                     </View>
// //                 ))}
// //             </View>
// //         </ScrollView>
       
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //     },
// //     body: {
// //         flex: 1,
// //         paddingTop: 10,
// //         borderTopStartRadius: 20,
// //         borderTopEndRadius: 20,
// //         backgroundColor: "white",
// //         marginTop: -24,
// //         paddingHorizontal: 16,
// //     },
// //     resetBtn: {
// //         backgroundColor: COLORS.red,
// //         borderRadius: 50,
// //         marginTop: 10,
// //         width: 100,
// //         marginBottom: 15,
// //     },
// //     resetBtnTitle: {
// //         color: "white",
// //         fontSize: 10,
// //         paddingHorizontal: 30,
// //         paddingVertical: 5,
// //         textTransform: 'uppercase',
// //     },
// //     productsList: {
// //         borderWidth: 2,
// //         marginBottom: 10,
// //         borderColor: COLORS.yellow,
// //         borderRadius: 35,
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         justifyContent: "space-between",
// //         paddingVertical: 7,
// //     },
// //     name: {
// //         paddingLeft: 17,
// //         fontSize: 14,
// //     },
// //     count: {
// //         fontSize: 14,
// //         paddingRight: 3,
// //     },
// //     row: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         paddingRight: 17,
// //     }

// // });


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
import {CustomText} from '../components/CustomText';

import { ProductCard } from "./";


export const ProductsList = ({ list }) => {
  const navigation = useNavigation();
  const {products } = list;
  return (
    <View style={styles.container}>
      

      <FlatList
        contentContainerStyle={styles.projectsList}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            title={item.text}
            listID={list.id}
            // productID={item.id}
            listID={list.id}
          />
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  })





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
// import {ProductCard} from './';

// export const ProductsList = ({ list, listID, productID, clickable = true}) => {
//   const navigation = useNavigation();
//   const { name, products } = list;
//   const productsCount = products.length;

//   return (
//     <TouchableOpacity
//       // onPress={() => {
//       //   navigation.navigate("SingleList", { listID, productID });
//       // }}
//       // disabled={!clickable}
//     >

//     <View style={styles.container}>
      
//       <FlatList
//         contentContainerStyle={styles.projectsList}
//         data={products}
//         renderItem={({ item }) => (
//           <ProductCard
//             title = {item.text}
//             listID={list.id}
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
