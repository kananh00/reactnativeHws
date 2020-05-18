import React, { useState } from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Keyboard,
    TextInput
} from 'react-native';

import { getLists, addList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';
import { CustomText, CustomBtn } from '../components';


const mapStateToProps = (state) => ({
    lists: getLists(state),
});

export const AddNewList = connect(mapStateToProps, {
    addList,
})(({ navigation, addList}) => {

    const [status, setStatus] = useState("onetime");
    const [fields, setFields] = useState({
        shopListID: "",
        name: "",
        status: "onetime",
    });

    const fieldChangeHandler = (name, value) => {
        setFields((fields) => ({
            ...fields,
            [name]: value,
        }));
    };

    const handleCreate = (status) => {
        const list_elements = {
            name: fields.name,
            status,
        };
        if(fields.name.trim()!=="") {
            addList(list_elements);
            if(list_elements.status==="onetime") {
                navigation.navigate("OneTimeLists"); 
            }
            else {
                navigation.navigate("RegularTimeLists");
            }
        }
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

            <View style = {styles.header}>
                <CustomText weight = "medium" style = {styles.headerText}>New List</CustomText>
            </View>

                <View style={styles.createListForm}>
                    <CustomText style={styles.formHeader}>list name</CustomText>
                    <TextInput style={styles.field} 
                        onChangeText={(val) => fieldChangeHandler("name", val)}
                        placeholder="Something for me"
                        placeholderTextColor={COLORS.black} 
                    />

                    <View style={styles.statusWrap}>
                        <TouchableOpacity
                            style={[styles.statusSelection, { backgroundColor: status === "onetime" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]}
                            onPress={() => setStatus("onetime")}
                        >
                            <Text style={[styles.statusName, { fontWeight: status === "onetime" ? "bold" : "400" }]}>
                                One Time
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.statusSelection, { backgroundColor: status === "regular" ? COLORS.lightGray : "rgba(238, 238, 238, 0.5);" }]} 
                            onPress={() => setStatus("regular")}
                        >
                            <Text style={[ styles.statusName, { fontWeight: status === "regular" ? "bold" : "400" }]}>
                                Regular
                            </Text>
                        </TouchableOpacity>  
                    </View>

                    <CustomBtn 
                        style={styles.btn}
                        name="Create List" 
                        onPress={() => handleCreate(status)}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    createListForm: {
        backgroundColor: "white",
        alignItems: "center",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        marginTop: -20,
    },
    formHeader: {
        textAlign: "center",
        paddingVertical: 15,
    },
    field: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 40,
        fontSize: 18,
        paddingVertical: 12,
        textAlign: "center", 
        width: "90%",
    }, 
    statusWrap: {
        flexDirection: "row", 
        justifyContent: "space-between",
        width: "90%",
    },
    statusSelection: {
        backgroundColor: COLORS.lightGray,
        width: "45%",
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 40,
        marginBottom: 17,
        marginTop: 17,
    },
    statusName: {
        fontSize: 12,
    },
    btn: {
        backgroundColor: COLORS.red,
    },
});