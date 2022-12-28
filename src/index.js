import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import authReducer from "./state";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// below are redux persist (local storage of redux states) settings from github. alternate is session storage-however it erase if we close window
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from "redux-persist";
//import storage from "redux-persist/lib/storage"; // for direct local storage
import sessionstorage from "redux-persist/lib/storage/session"; // for session storage only
import { PersistGate } from "redux-persist/integration/react";


//const persistConfig = { key: "root", storage, version: 1 }; // for local storage
const persistConfig = { key: "root", storage:sessionstorage, version: 1 }; // session storage

const persistedReducer = persistReducer(persistConfig, authReducer); // adding the authslice to localstorage

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// redux persist config ended

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

