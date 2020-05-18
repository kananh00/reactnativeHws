import React, {useState} from "react";
import { AppLoading } from "expo";
import { RootNav } from "./navigation";
import { Provider } from "react-redux";
import store from "./redux";
import { loadFonts } from "./styles/fonts";
import { RootDrawer } from "./navigation/RootDrawer";
import { AuthCTXProvider } from "./context/auth";
export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => console.log("Loading failed")}
      />
    );
  }


  return (
    <Provider store={store}>
      <AuthCTXProvider>
      <RootDrawer />
    </AuthCTXProvider>

    </Provider>
  );
}
