import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TextInput
} from 'react-native';

import COLORS from '../styles/colors';
import { CustomText, CustomField, CustomBtn } from '../components';
import { getLists, addList } from '../redux/data';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    lists: getLists(state),
});

export const AddNewList = connect(mapStateToProps, {
    addList,
})(({ addList, navigation }) => {

    const isRegular = status === "regular";
    const [status, setStatus] = useState("regular");

    const [fields, setFields] = useState({
        shopListID: null,
        name: "",
        status: "regular",
    });

    const fieldChangneHandler = (name, value) => {
        setFields((fields) => ({
            ...fields,
            [name]: value,
        }));
    };

    const createListBtnHandler = (status) => {

        const args = {
            name: fields.name,
            status,
        };

        if(fields.name.trim() !== "") {
            addList(args);
            if(args.status === "regular") {
                navigation.navigate("RegularTimeLists"); 
            }
            else {
                navigation.navigate("OneTimeLists");
            }
        }
    };

    
    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <View style = {styles.header}>
          <CustomText weight = "medium" style = {styles.headerText}>New List</CustomText>
          
        </View>
                    <View style={styles.form}>
                        <CustomText style={styles.listName}>list name</CustomText>
                        <TextInput style={styles.field} 
                            placeholder="Something for me"
                            placeholderTextColor={COLORS.black} 
                            onChangeText={(val) => fieldChangneHandler("name", val)}
                            
                        />

                        <View style={styles.optionsWrapper}>
                            <TouchableOpacity 
                                onPress={() => setStatus("onetime")}
                                style={[styles.options,
                                    { backgroundColor: status === "onetime" ?   COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }
                                ]} 
                               
                            >
                                <Text 
                                    style={
                                       [styles.text1, { fontWeight: status === "onetime" ? "bold" : "400" }]
                                    }
                                >
                                    One Time
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setStatus("regular")}
                                style={[styles.options,
                                    { backgroundColor: status === "regular" ?   COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }
                                ]} 
                                
                            >
                                <Text 
                                    style={
                                       [ styles.text1, { fontWeight: status === "regular" ? "bold" : "400" }]
                                    }
                                >
                                    Regular
                                </Text>
                            </TouchableOpacity>  
                        </View>

                        <CustomBtn 
                            title="Create List" 
                            style={styles.crateBtn}
                            onPress={() => createListBtnHandler(status)}
                        />

                    </View>

            </View>
        </TouchableWithoutFeedback>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    headerText: {
        color: "white",
        fontSize: 18,
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
      },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingVertical: 17,
    },
    form: {
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: -24,
        paddingHorizontal: 5,
    },
    listName: {
        textAlign: "center",
        marginHorizontal: 10,
        paddingBottom: 10,
    },
        field: {
            backgroundColor: COLORS.lightGray,
            borderRadius: 40,
            fontSize: 18,
            paddingVertical: 10,
            textAlign: "center", 
            marginBottom: 15,
            width: "90%",

    }, 
    optionsWrapper: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
    },


    options: {
        backgroundColor: COLORS.lightGray,
        width: "48%",
        marginHorizontal: 1,
        paddingVertical: 13,
        borderRadius: 45,
        marginBottom: 15,
        alignItems: 'center',
    },
    crateBtn: {
        backgroundColor: COLORS.red,
    },
});