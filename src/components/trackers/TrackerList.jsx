import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import TrackerAdd from "./TrackerAdd";

function TrackerList() {
  const contracts = useSelector((state) => state.contracts.list);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-19 bg-subbg border-2 border-border rounded-2xl sm:w-full md:w-[80vw]">
      {/* Modal */}
      <TrackerAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 text-text">Trackers</h2>
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

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#f9fafb] bg-button rounded-lg">
          <tr>
            <th className="px-6 py-3 rounded-l-xl">ID</th>
            <th className="px-6 py-3">FACILITY</th>
            <th className="px-6 py-3">CATEGORY</th>
            <th className="px-6 py-3">STATUS</th>
            <th className="px-6 py-3">LAST SERVICE</th>
            <th className="px-6 py-3">INSTALLATION</th>
            <th className="px-6 py-3">AMC STATUS</th>
            <th className="px-6 py-3 rounded-r-xl"></th>
          </tr>
        </thead>
        <tbody className="text-text">
          {contracts.map((item) => (
            <tr
              key={item.id}
              className="bg-subbg border-border border-b-2 text-text"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.deviceId}</td>
              <td className="px-6 py-4">{item.contractType}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full me-2 ${
                      item.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4">{item.startDate}</td>
              <td className="px-6 py-4">{item.endDate}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">
                <div className="flex align-middle justify-center pt-2">
                  <a
                    className="text-text block m-1 bg-subbg hover:text-[#ffb732] font-medium rounded-lg p-1 text-center"
                    href="#"
                  >
                    <MdOutlineEdit size={20} />
                  </a>
                  <a
                    className="text-text block m-1 bg-subbg hover:text-[#c72c2c] font-medium rounded-lg p-1 text-center"
                    href="#"
                  >
                    <MdDelete size={20} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrackerList;
