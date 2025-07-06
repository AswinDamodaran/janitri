import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: "SV001",
      deviceId: "DVC001",
      date: "2025-06-20",
      engineer: "Ravi Kumar",
      purpose: "Preventive",
      notes: "Routine maintenance completed.",
      attachments: ["/docs/service1.pdf", "/photos/service1.jpg"],
    },
    {
      id: "SV002",
      deviceId: "DVC002",
      date: "2025-06-18",
      engineer: "Anjali Sharma",
      purpose: "Breakdown",
      notes: "Replaced faulty sensor.",
      attachments: ["/photos/service2.jpg"],
    },
    {
      id: "SV003",
      deviceId: "DVC003",
      date: "2025-06-17",
      engineer: "Sunil Gupta",
      purpose: "Preventive",
      notes: "Cleaned and recalibrated device.",
      attachments: [],
    },
    {
      id: "SV004",
      deviceId: "DVC004",
      date: "2025-06-15",
      engineer: "Meena Joshi",
      purpose: "Breakdown",
      notes: "Battery not charging. Replaced battery.",
      attachments: ["/docs/service4.pdf"],
    },
    {
      id: "SV005",
      deviceId: "DVC005",
      date: "2025-06-14",
      engineer: "Arun Nair",
      purpose: "Preventive",
      notes: "Device tested and calibrated.",
      attachments: [],
    },
    {
      id: "SV006",
      deviceId: "DVC006",
      date: "2025-06-13",
      engineer: "Pooja Mishra",
      purpose: "Breakdown",
      notes: "Device not powering on. Power board replaced.",
      attachments: ["/photos/service6.jpg"],
    },
    {
      id: "SV007",
      deviceId: "DVC007",
      date: "2025-06-12",
      engineer: "Deepak Reddy",
      purpose: "Preventive",
      notes: "Checked internal wiring. No issues found.",
      attachments: [],
    },
    {
      id: "SV008",
      deviceId: "DVC008",
      date: "2025-06-11",
      engineer: "Kiran Rao",
      purpose: "Breakdown",
      notes: "Display malfunctioning. Screen replaced.",
      attachments: ["/docs/service8.pdf", "/photos/service8.jpg"],
    },
    {
      id: "SV009",
      deviceId: "DVC009",
      date: "2025-06-10",
      engineer: "Divya Bhatt",
      purpose: "Preventive",
      notes: "Preventive servicing done. Functional test passed.",
      attachments: [],
    },
  ],
};

const serviceVisitSlice = createSlice({
  name: "serviceVisits",
  initialState,
  reducers: {
    addServiceVisit: (state, action) => {
      state.list.push(action.payload);
    },
    updateServiceVisit: (state, action) => {
      const index = state.list.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteServiceVisit: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addServiceVisit, updateServiceVisit, deleteServiceVisit } =
  serviceVisitSlice.actions;

export default serviceVisitSlice.reducer;
