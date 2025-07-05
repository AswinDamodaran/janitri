import { createSlice } from '@reduxjs/toolkit';

const initialLogs = [
  {
    id: 'AL001',
    device: 'DVC001',
    condition: 'Damaged casing during unboxing',
    alert: 'Casing cracked on delivery',
    photoUrl: 'https://via.placeholder.com/150',
    showImage: false,
  },
  {
    id: 'AL002',
    device: 'DVC003',
    condition: 'Working fine',
    alert: '',
    photoUrl: '',
    showImage: false,
  },
  {
    id: 'AL003',
    device: 'DVC005',
    condition: 'Display flickers',
    alert: 'Screen malfunction observed',
    photoUrl: 'https://via.placeholder.com/150',
    showImage: false,
  },
  {
    id: 'AL004',
    device: 'DVC009',
    condition: 'Battery not holding charge',
    alert: 'Battery drops to 0% rapidly',
    photoUrl: 'https://via.placeholder.com/150',
    showImage: false,
  },
  {
    id: 'AL005',
    device: 'DVC011',
    condition: 'Buttons not responsive',
    alert: 'No response when pressed',
    photoUrl: 'https://via.placeholder.com/150',
    showImage: false,
  },
];

const alertLogsSlice = createSlice({
  name: 'alertLogs',
  initialState: {
    list: initialLogs,
  },
  reducers: {
    addLog: (state, action) => {
      state.list.push(action.payload);
    },
    toggleImageVisibility: (state, action) => {
      const log = state.list.find((log) => log.id === action.payload);
      if (log) {
        log.showImage = !log.showImage;
      }
    },
    deleteLog: (state, action) => {
      state.list = state.list.filter((log) => log.id !== action.payload);
    },
  },
});

export const { addLog, toggleImageVisibility, deleteLog } = alertLogsSlice.actions;
export default alertLogsSlice.reducer;
