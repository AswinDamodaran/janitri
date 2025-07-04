import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from './deviseSlice'
import installationReducer from './installationSlice'

const store = configureStore({
  reducer: {
    devices: deviceSlice,
    installations: installationReducer,
    // serviceVisits: serviceReducer,
    // contracts: contractReducer,
    // alerts: alertReducer,
    // facilities: facilityReducer,
    // theme: themeReducer,
    // auth: authReducer, 
  },
});

export default store;