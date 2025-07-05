import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from './deviceSlice'
import installationReducer from '././installationSlice'
import serviceReducer from './serviceSlice'
import contractReducer from './trackerSlice'
import alertLogsReducer from './alertLogsSlice'

const store = configureStore({
  reducer: {
    devices: deviceSlice,
    installations: installationReducer,
    serviceVisits: serviceReducer,
    contracts: contractReducer,
    alertLogs: alertLogsReducer,
  },
});

export default store;