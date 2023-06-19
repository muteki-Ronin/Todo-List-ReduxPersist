import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Containers/App";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);
