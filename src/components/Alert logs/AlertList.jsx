import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageVisibility } from "../../store/alertLogsSlice";

function AlertList() {
  const logs = useSelector((state) => state.alertLogs.list);
  const dispatch = useDispatch();

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
                className="text-sm text-blue-400 underline"
                onClick={() => dispatch(toggleImageVisibility(log.id))}
              >
                {log.showImage ? "Hide Image" : "Click to view image"}
              </button>

              {log.showImage && log.photoUrl && (
                <img
                  src={log.photoUrl}
                  alt={log.device || "Device image"}
                  loading="lazy"
                  className="mt-3 w-48 h-48 object-cover border rounded"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlertList;
