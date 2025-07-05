import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageVisibility } from "../../store/alertLogsSlice";
import { FaFileImage } from "react-icons/fa";


function AlertList() {
  const logs = useSelector((state) => state.alertLogs.list);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (log) => {
    setSelectedImage(log.photoUrl);
    dispatch(toggleImageVisibility(log.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4 sm:ml-64 mt-20 bg-subbg border-2 border-border rounded-2xl w-full md:w-[80vw]">
      <h2 className="text-xl font-semibold mb-4 text-text border-border border-b-2 pb-2">
        Alert Logs
      </h2>

      {logs.map((log) => (
        <div
          key={log.id}
          className="flex justify-between bg-subbg border-border border-b-2 p-4 mb-4"
        >
          <div>
            <p className="text-text">
              <strong>Device:</strong> {log.device}
            </p>
            <p className="text-text">
              <strong>Condition:</strong> {log.condition}
            </p>
            {log.alert && (
              <p className="text-red-500">
                <strong>Alert:</strong> {log.alert}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end justify-between">
            <div className="self-end">
              <button
                className="text-sm text-blue-400 flex "
                onClick={() => handleImageClick(log)}
              >
                <FaFileImage size={20} />Click to view

              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Device Image
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Device"
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AlertList;
