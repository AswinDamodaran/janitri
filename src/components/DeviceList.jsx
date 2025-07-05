import React from "react";
import { useSelector } from "react-redux";

function DeviceList() {
  const devices = useSelector((state) => state.devices.list);

  return (
    <div className="p-4 sm:ml-60 border-2 border-border overflow-auto mt-11">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-xs text-text bg-button ">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Facility
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Battery
            </th>
            <th scope="col" className="px-6 py-3">
              Last Service
            </th>
            <th scope="col" className="px-6 py-3">
              Installation 
            </th>
            <th scope="col" className="px-6 py-3">
              AMC Status
            </th>
          </tr>
        </thead>
        <tbody className="text-text">
          {devices.map((device) => (
            <tr
              key={device.id}
              className="bg-subbg border-b dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-text whitespace-nowrap "
              >
                {device.id}
              </th>
              <td className="px-6 py-4">{device.type}</td>
              <td className="px-6 py-4">{device.facility}</td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full me-2 ${
                      device.status === "Online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  {device.status}
                </div>
              </td>
              <td className="px-6 py-4">{device.battery}%</td>
              <td className="px-6 py-4">{device.lastServiceDate}</td>
              <td className="px-6 py-4">{device.installationDate}</td>
              <td className="px-6 py-4">{device.amcStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeviceList;
