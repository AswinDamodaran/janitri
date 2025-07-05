import React from "react";
import { useSelector } from "react-redux";

function InstallationList() {
  const installations = useSelector((state) => state.installations.list);

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-11">
      <h2 className="text-xl font-semibold mb-4 text-text">Installations</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-text uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Device</th>
            <th className="px-6 py-3">Facility</th>
            <th className="px-6 py-3">Unboxing Photo</th>
            <th className="px-6 py-3">Checklist Completed</th>
            <th className="px-6 py-3">Training Form Submitted</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {installations.map((item) => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.device}</td>
              <td className="px-6 py-4">{item.facility}</td>
              <td className="px-6 py-4">
                {item.unboxingPhoto ? (
                  <img src={item.unboxingPhoto} alt="Unboxing" className="h-10 w-10 object-cover rounded" />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="px-6 py-4">{item.checklistCompleted ? "Yes" : "No"}</td>
              <td className="px-6 py-4">{item.trainingFormSubmitted ? "Yes" : "No"}</td>
              <td className="px-6 py-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstallationList;
