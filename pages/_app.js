import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import WatsonWrapper from "@/components/watsonWrapper";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
