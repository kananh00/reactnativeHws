import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    OneTimeLists,
    RegularTimeLists,
    SingleList,
    SingleListEdit,
    SingleProductEdit,
    UserSettings, 
    AddNewList,
  } from "../screens";

import { CustomDrawer } from '../commons/CustomDrawer';
// import { CreateStack } from './CreateStack';
// import { OneTimeStack } from './OneTimeStack';
// import { MenuHeaderIcon } from '../components';

export const RootDrawer = () => {

    const { Navigator, Screen } = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Navigator
                drawerContent={({navigation}) => (
                    <CustomDrawer navigation={navigation} />
                )}>
                    
                <Screen name="OneTimeLists" component={OneTimeLists} />
                <Screen name="AddNewList" component={AddNewList} />
                <Screen name="RegularTimeLists" component={RegularTimeLists} />    
                <Screen name="UserSettings" component={UserSettings} />
                <Screen name="SingleList" component={SingleList} />
            </Navigator>
        </NavigationContainer>
    );
};