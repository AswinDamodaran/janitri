import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import AddInstallationModal from "./InstallationAdd";
import { deleteInstallation } from "../../store/installationSlice";
import { useSnackbar } from "notistack";

function InstallationList() {
  const dispatch = useDispatch();
  const installations = useSelector((state) => state.installations.list);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    enqueueSnackbar("Deleted successfully!", { variant: "success" });
    if (confirmed) {
      dispatch(deleteInstallation(id));
    }
  };

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-19 bg-subbg border-2 border-border rounded-2xl sm:w-full md:w-[80vw]">
      <AddInstallationModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
        }}
        initialData={editData}
      />
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 text-text">Installations</h2>
        <button
          className="text-text block m-1 bg-subbg hover:bg-button font-medium rounded-lg text-sm px-4 py-1 text-center border-button border-2"
          onClick={(e) => {
            e.stopPropagation();
            setModalOpen(true);
          }}
        >
          Add
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#f9fafb] bg-button rounded-lg">
          <tr>
            <th className="px-6 py-3 rounded-l-xl">ID</th>
            <th className="px-6 py-3">Device</th>
            <th className="px-6 py-3">Facility</th>
            <th className="px-6 py-3">Unboxing Photo</th>
            <th className="px-6 py-3">Checklist Completed</th>
            <th className="px-6 py-3">Training Form Submitted</th>
            <th className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3 rounded-r-xl"></th>
          </tr>
        </thead>
        <tbody>
          {installations.map((item) => (
            <tr
              key={item.id}
              className="bg-subbg border-border border-b-2 text-text"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.device}</td>
              <td className="px-6 py-4">{item.facility}</td>
              <td className="px-6 py-4">
                {item.unboxingPhoto ? (
                  <img
                    src={item.unboxingPhoto}
                    alt="Unboxing"
                    className="h-10 w-10 object-cover rounded"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="px-6 py-4">
                {item.checklistCompleted ? "Yes" : "No"}
              </td>
              <td className="px-6 py-4">
                {item.trainingFormSubmitted ? "Yes" : "No"}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.status === "In Progress"
                        ? "bg-yellow-500"
                        : item.status === "Completed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <span className="capitalize">{item.status}</span>
                </div>
              </td>
              <td className="flex align-middle justify-center pt-2">
                <button
                  className="text-text block m-1 hover:text-[#ffb732] font-medium rounded-lg p-1"
                  onClick={() => {
                    setEditData(item);
                    setModalOpen(true);
                  }}
                >
                  <MdOutlineEdit size={20} />
                </button>
                <button
                  className="text-text block m-1 hover:text-[#c72c2c] font-medium rounded-lg p-1"
                  onClick={() => handleDelete(item.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstallationList;
