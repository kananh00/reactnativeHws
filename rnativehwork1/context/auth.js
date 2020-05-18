import React, { createContext, useState } from "react";
import { AsyncStorage, Alert } from "react-native";

export const AuthCTX = createContext();

export const AuthCTXProvider = ({ children }) => {
  const [auth, setAuth] = useState({

    username: "username",
    imgUri: "https://www.image.com/image.jpg",
  });

  const createUser = async (username) => {
    try {
      const create = await AsyncStorage.setItem(username);
      if (create) {
        return {
          user: true
        };
      }

      setAuth((auth) => ({
        ...auth,
        username,
        imgUri,
      }));

      return {
        user: false,
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
