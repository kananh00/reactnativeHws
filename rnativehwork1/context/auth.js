import React, { createContext, useState } from "react";
import { AsyncStorage, Alert } from "react-native";

export const AuthCTX = createContext();

export const AuthCTXProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: true,
    username: "username",
  });

 

  const createUser= async (username) => {
    try {
      const isUserExist = await AsyncStorage.getItem(username);
      

      const create = await AsyncStorage.setItem(username);
     

      setAuth((auth) => ({
        ...auth,
        status: true,
        username,
      }));

      return {
        error: false,
      };
    } catch (e) {
      console.log(e);
    }
  };


 
  return (
    <AuthCTX.Provider
      value={{ auth, createUser}}
    >
      {children}
    </AuthCTX.Provider>
  );
};
