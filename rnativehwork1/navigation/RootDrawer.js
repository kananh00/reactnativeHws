import React, {useContext} from 'react';
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
import { AuthCTX } from "../context/auth";
export const RootDrawer = () => {
    const { auth } = useContext(AuthCTX);
    const { Navigator, Screen } = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Navigator
        
        drawerContent={(props) => (
          <CustomDrawer {...props} auth={auth} />
        )}
      >                    
                <Screen name="OneTimeLists" component={OneTimeLists} />
                <Screen name="AddNewList" component={AddNewList} />
                <Screen name="RegularTimeLists" component={RegularTimeLists} />    
                <Screen name="UserSettings" component={UserSettings} />
                <Screen name="SingleList" component={SingleList} />
            </Navigator>
        </NavigationContainer>
    );
};