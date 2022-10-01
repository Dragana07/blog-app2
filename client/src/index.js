import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ContextProvider } from "./context/Context";
import { Provider } from "react-redux";
import {persistor, store} from "./app/store";
import {PersistGate} from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/* </ContextProvider> */}
  </React.StrictMode>
);
