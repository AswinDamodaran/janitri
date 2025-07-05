import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import ServiceAdd from "./ServiceAdd";
import { deleteServiceVisit } from "../../store/serviceSlice";
import { useSnackbar } from "notistack";

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceVisits.list);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmed) {
      dispatch(deleteServiceVisit(id));
      enqueueSnackbar("Deleted successfully!", { variant: "success" });
    }
  };

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-19 bg-subbg border-2 border-border rounded-2xl sm:w-full md:w-[80vw]">
      <ServiceAdd
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
        }}
        initialData={editData}
      />
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 text-text">Service Log</h2>
        <button
          onClick={() => {
            setModalOpen(true);
            setEditData(null);
          }}
          className="text-text block m-1 bg-subbg hover:bg-button font-medium rounded-lg text-sm px-4 py-1 text-center border-button border-2"
        >
          Add
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#f9fafb] bg-button rounded-lg">
          <tr>
            <th className="px-6 py-3 rounded-l-xl">ID</th>
            <th className="px-6 py-3">DEVICE ID</th>
            <th className="px-6 py-3">DATE</th>
            <th className="px-6 py-3">ENGINEER</th>
            <th className="px-6 py-3">PURPOSE</th>
            <th className="px-6 py-3">NOTES</th>
            <th className="px-6 py-3">ATTACHMENT</th>
            <th scope="col" className="px-6 py-3 rounded-r-xl">
              {""}
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr
              key={item.id}
              className="bg-subbg border-border border-b-2 text-text"
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.deviceId}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.engineer}</td>
              <td className="px-6 py-4">{item.purpose}</td>
              <td className="px-6 py-4 overflow-auto w-10">{item.notes}</td>
              <td className="px-6 py-4 max-w-3 overflow-hidden min-w-50">
                {item.attachments?.length > 0 && (
                  <a
                    href={item.attachments}
                    className="flex items-start my-2.5 p-2 cursor-pointer rounded-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-text pb-2 overflow-hidden">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="w-5 h-5 shrink-0"
                        viewBox="0 0 20 21"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            fill="#E2E5E7"
                            d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                          />
                          <path
                            fill="#B0B7BD"
                            d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                          />
                          <path
                            fill="#CAD1D8"
                            d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                          />
                          <path
                            fill="#F15642"
                            d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path
                              fill="#fff"
                              d="M0 0h20v20H0z"
                              transform="translate(0 .5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.attachments}
                    </span>
                  </a>
                )}
              </td>
              <td className="flex align-middle justify-center pt-2 ml-5">
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

export default ServiceList;
