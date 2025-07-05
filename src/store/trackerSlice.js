import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 'AMC001',
      deviceId: 'DVC001',
      contractType: 'AMC',
      startDate: '2024-01-01',
      endDate: '2025-01-01',
      status: 'Active',
    },
    {
      id: 'AMC002',
      deviceId: 'DVC005',
      contractType: 'CMC',
      startDate: '2023-06-15',
      endDate: '2024-06-15',
      status: 'Expired',
    },
    {
      id: 'AMC003',
      deviceId: 'DVC010',
      contractType: 'AMC',
      startDate: '2024-07-01',
      endDate: '2025-07-01',
      status: 'Active',
    },
    {
      id: 'AMC004',
      deviceId: 'DVC015',
      contractType: 'CMC',
      startDate: '2023-09-10',
      endDate: '2024-09-10',
      status: 'Expiring Soon',
    },
    {
      id: 'AMC005',
      deviceId: 'DVC020',
      contractType: 'AMC',
      startDate: '2024-02-20',
      endDate: '2025-02-20',
      status: 'Active',
    },
  ],
};

const trackerSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    addContract: (state, action) => {
      state.list.push(action.payload);
    },
    updateContract: (state, action) => {
      const index = state.list.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteContract: (state, action) => {
      state.list = state.list.filter(c => c.id !== action.payload);
    },
  },
});

export const { addContract, updateContract, deleteContract } = trackerSlice.actions;
export default trackerSlice.reducer;
