import React from "react";
import { useSelector } from "react-redux";

function DeviceList() {
  const devices = useSelector((state) => state.devices.list);

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-19 bg-subbg border-2 border-border rounded-2xl sm:w-full md:w-[81vw] lg:w-[81vw]">
      <div className="flex justify-between  items-center">
        <h2 className="text-xl font-semibold mb-4 text-text">Devices</h2>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className=" text-xs text-[#f9fafb] bg-button rounded-lg">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-xl">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              FACILITY
            </th>
            <th scope="col" className="px-6 py-3">
              CATEGORY
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
            <th scope="col" className="px-6 py-3">
              BATTERY
            </th>
            <th scope="col" className="px-6 py-3">
              LAST SERVICE
            </th>
            <th scope="col" className="px-6 py-3">
              INSTALLATION
            </th>
            <th scope="col" className="px-6 py-3">
              AMC STATUS
            </th>
            {/* <th scope="col" className="px-6 py-3 rounded-r-xl">
              {""}
            </th> */}
          </tr>
        </thead>
        <tbody className="text-text">
          {devices.map((device) => (
            <tr
              key={device.id}
              className="bg-subbg border-border border-b-2 text-text"
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
