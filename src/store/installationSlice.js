import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: "INS001",
      deviceId: "DVC001",
      facility: "City Hospital",
      date: "2025-06-10",
      checklistCompleted: true,
      trainer: "Dr. Rajeev Sharma",
      trainee: "Nurse Asha",
      photoURL: "/photos/unboxing1.jpg",
      status: "Completed",
    },
    {
      id: "INS002",
      deviceId: "DVC002",
      facility: "Clinic A",
      date: "2025-06-12",
      checklistCompleted: false,
      trainer: "Mr. Anand Kumar",
      trainee: "Dr. Seema",
      photoURL: "/photos/unboxing2.jpg",
      status: "In Progress",
    },
    {
      id: "INS003",
      deviceId: "DVC003",
      facility: "Clinic B",
      date: "2025-06-15",
      checklistCompleted: true,
      trainer: "Ms. Anita Das",
      trainee: "Technician Vinod",
      photoURL: "/photos/unboxing3.jpg",
      status: "Completed",
    },
    {
      id: "INS004",
      deviceId: "DVC004",
      facility: "Health Center 1",
      date: "2025-06-17",
      checklistCompleted: false,
      trainer: "Dr. Manoj",
      trainee: "Nurse Neeta",
      photoURL: "/photos/unboxing4.jpg",
      status: "Pending",
    },
    {
      id: "INS005",
      deviceId: "DVC005",
      facility: "City Hospital",
      date: "2025-06-18",
      checklistCompleted: true,
      trainer: "Mr. Suresh Nair",
      trainee: "Dr. Rekha",
      photoURL: "/photos/unboxing5.jpg",
      status: "Completed",
    },
    {
      id: "INS006",
      deviceId: "DVC006",
      facility: "Clinic C",
      date: "2025-06-20",
      checklistCompleted: false,
      trainer: "Ms. Leena",
      trainee: "Technician John",
      photoURL: "/photos/unboxing6.jpg",
      status: "In Progress",
    },
    {
      id: "INS007",
      deviceId: "DVC007",
      facility: "Clinic A",
      date: "2025-06-21",
      checklistCompleted: true,
      trainer: "Dr. Abhay",
      trainee: "Nurse Priya",
      photoURL: "/photos/unboxing7.jpg",
      status: "Completed",
    },
    {
      id: "INS008",
      deviceId: "DVC008",
      facility: "Clinic D",
      date: "2025-06-22",
      checklistCompleted: false,
      trainer: "Mr. Nikhil",
      trainee: "Dr. Ramesh",
      photoURL: "/photos/unboxing8.jpg",
      status: "Pending",
    },
    {
      id: "INS009",
      deviceId: "DVC009",
      facility: "Health Center 2",
      date: "2025-06-24",
      checklistCompleted: true,
      trainer: "Ms. Fatima",
      trainee: "Technician Sweta",
      photoURL: "/photos/unboxing9.jpg",
      status: "Completed",
    },
    {
      id: "INS010",
      deviceId: "DVC010",
      facility: "City Hospital",
      date: "2025-06-25",
      checklistCompleted: false,
      trainer: "Mr. Karan",
      trainee: "Nurse Meera",
      photoURL: "/photos/unboxing10.jpg",
      status: "In Progress",
    },
    {
      id: "INS011",
      deviceId: "DVC011",
      facility: "Clinic B",
      date: "2025-06-26",
      checklistCompleted: true,
      trainer: "Dr. Vivek",
      trainee: "Dr. Malini",
      photoURL: "/photos/unboxing11.jpg",
      status: "Completed",
    },
    {
      id: "INS012",
      deviceId: "DVC012",
      facility: "Clinic C",
      date: "2025-06-28",
      checklistCompleted: false,
      trainer: "Mr. Arvind",
      trainee: "Technician Ajay",
      photoURL: "/photos/unboxing12.jpg",
      status: "Pending",
    },
    {
      id: "INS013",
      deviceId: "DVC013",
      facility: "Clinic D",
      date: "2025-06-29",
      checklistCompleted: true,
      trainer: "Ms. Roma",
      trainee: "Nurse Gita",
      photoURL: "/photos/unboxing13.jpg",
      status: "Completed",
    },
    {
      id: "INS014",
      deviceId: "DVC014",
      facility: "Health Center 1",
      date: "2025-06-30",
      checklistCompleted: false,
      trainer: "Dr. Rahul",
      trainee: "Dr. Nisha",
      photoURL: "/photos/unboxing14.jpg",
      status: "In Progress",
    },
    {
      id: "INS015",
      deviceId: "DVC015",
      facility: "Clinic A",
      date: "2025-07-01",
      checklistCompleted: true,
      trainer: "Ms. Sneha",
      trainee: "Technician Raj",
      photoURL: "/photos/unboxing15.jpg",
      status: "Completed",
    },
  ],
};


const installationSlice = createSlice({
  name: "installations",
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.list.push(action.payload);
    },
    updateInstallation: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteInstallation: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addInstallation,
  updateInstallation,
  deleteInstallation,
} = installationSlice.actions;

export default installationSlice.reducer;
