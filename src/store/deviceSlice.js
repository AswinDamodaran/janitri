import { createSlice } from "@reduxjs/toolkit";

const initialDevices = [
  {
    id: "DVC001",
    type: "ECG Monitor",
    facility: "City Hospital",
    status: "Online",
    battery: 87,
    lastServiceDate: "2025-06-20",
    installationDate: "2025-01-15",
    amcStatus: "Active",
  },
  {
    id: "DVC002",
    type: "BP Monitor",
    facility: "Clinic A",
    status: "Offline",
    battery: 15,
    lastServiceDate: "2025-05-18",
    installationDate: "2024-11-03",
    amcStatus: "Expired",
  },
  {
    id: "DVC003",
    type: "Thermometer",
    facility: "Clinic B",
    status: "Maintenance",
    battery: 45,
    lastServiceDate: "2025-05-10",
    installationDate: "2023-09-21",
    amcStatus: "Pending",
  },
  {
    id: "DVC004",
    type: "Pulse Oximeter",
    facility: "Health Center 1",
    status: "Online",
    battery: 67,
    lastServiceDate: "2025-03-02",
    installationDate: "2024-01-05",
    amcStatus: "Active",
  },
  {
    id: "DVC005",
    type: "Infusion Pump",
    facility: "City Hospital",
    status: "Offline",
    battery: 23,
    lastServiceDate: "2025-06-01",
    installationDate: "2023-08-14",
    amcStatus: "Expired",
  },
  {
    id: "DVC006",
    type: "Ventilator",
    facility: "Clinic C",
    status: "Online",
    battery: 91,
    lastServiceDate: "2025-01-22",
    installationDate: "2023-11-11",
    amcStatus: "Active",
  },
  {
    id: "DVC007",
    type: "ECG Monitor",
    facility: "Clinic A",
    status: "Maintenance",
    battery: 54,
    lastServiceDate: "2025-04-19",
    installationDate: "2024-04-10",
    amcStatus: "Pending",
  },
  {
    id: "DVC008",
    type: "BP Monitor",
    facility: "Clinic D",
    status: "Online",
    battery: 78,
    lastServiceDate: "2025-02-14",
    installationDate: "2023-12-01",
    amcStatus: "Active",
  },
  {
    id: "DVC009",
    type: "Syringe Pump",
    facility: "Health Center 2",
    status: "Offline",
    battery: 32,
    lastServiceDate: "2025-06-15",
    installationDate: "2024-02-20",
    amcStatus: "Expired",
  },
  {
    id: "DVC010",
    type: "Thermometer",
    facility: "City Hospital",
    status: "Online",
    battery: 60,
    lastServiceDate: "2025-06-03",
    installationDate: "2023-06-30",
    amcStatus: "Active",
  },
  {
    id: "DVC021",
    type: "BP Monitor",
    facility: "City Hospital",
    status: "Online",
    battery: 66,
    lastServiceDate: "2025-04-20",
    installationDate: "2023-07-01",
    amcStatus: "Active",
  },
  {
    id: "DVC022",
    type: "Thermometer",
    facility: "Clinic A",
    status: "Offline",
    battery: 18,
    lastServiceDate: "2025-03-09",
    installationDate: "2023-10-20",
    amcStatus: "Expired",
  },
  {
    id: "DVC023",
    type: "Pulse Oximeter",
    facility: "Clinic D",
    status: "Maintenance",
    battery: 47,
    lastServiceDate: "2025-02-25",
    installationDate: "2024-04-02",
    amcStatus: "Pending",
  },
  {
    id: "DVC024",
    type: "Ventilator",
    facility: "Clinic B",
    status: "Online",
    battery: 84,
    lastServiceDate: "2025-06-05",
    installationDate: "2023-08-18",
    amcStatus: "Active",
  },
  {
    id: "DVC025",
    type: "Syringe Pump",
    facility: "Clinic C",
    status: "Offline",
    battery: 35,
    lastServiceDate: "2025-01-19",
    installationDate: "2024-03-28",
    amcStatus: "Expired",
  },
];

const deviceSlice = createSlice({
  name: "devices",
  initialState: {
    list: initialDevices,
  },
  reducers: {
    addDevice: (state, action) => {
      state.list.push(action.payload);
    },
    updateDevice: (state, action) => {
      const index = state.list.findIndex((d) => d.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteDevice: (state, action) => {
      state.list = state.list.filter((d) => d.id !== action.payload);
    },
  },
});

export const { addDevice, updateDevice, deleteDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
