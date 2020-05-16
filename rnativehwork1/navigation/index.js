import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
 
  OneTimeLists,
  RegularTimeLists,
  SingleList,
  SingleListEdit,
  SingleProductEdit,
  UserSettings, 
  AddNewList,
} from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      
      <Screen name="OneTimeLists" component={OneTimeLists} />
      <Screen name="RegularTimeLists" component={RegularTimeLists} />
      <Screen name="SingleList" component={SingleList} />
      <Screen name="SingleListEdit" component={SingleListEdit} />
      <Screen name="SingleProductEdit" component={SingleProductEdit} />
      <Screen name="UserSettings" component={UserSettings} />
      <Screen name="AddNewList" component={AddNewList} />
    </Navigator>
  </NavigationContainer>
);
