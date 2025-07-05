import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ServiceAdd from "./ServiceAdd";

function ServiceList() {
  const services = useSelector((state) => state.serviceVisits.list);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-4 sm:ml-64 overflow-auto mt-19 bg-subbg border-2 border-border rounded-2xl sm:w-full md:w-[80vw]">
      <ServiceAdd isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 text-text">Service Log</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="text-text block m-1 bg-subbg hover:bg-button font-medium rounded-lg text-sm px-4 py-1 text-center border-button border-2"
        >
          Add
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-xs text-[#f9fafb] bg-button rounded-lg">
          <tr>
            <th className="px-6 py-3 rounded-l-xl">ID</th>
            <th className="px-6 py-3">DEVICE ID</th>
            <th className="px-6 py-3">DATE</th>
            <th className="px-6 py-3">ENGINEER</th>
            <th className="px-6 py-3">PURPOSE</th>
            <th className="px-6 py-3">NOTES</th>
            <th className="px-6 py-3 ">ATTACHMENT</th>
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
              <td className="px-6 py-4 max-w-3 overflow-hidden min-w-50 ">
                {item.attachments?.length > 0 && (
                  <a
                    href="#"
                    class="flex items-start my-2.5 p-2  cursor-pointer rounded-xl"
                  >
                    <span class="flex items-center gap-2 text-sm font-medium text-text pb-2 overflow-hidden">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 21"
                      >
                        <g clip-path="url(#clip0_3173_1381)">
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
                          <path
                            fill="#fff"
                            d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"
                          />
                          <path
                            fill="#CAD1D8"
                            d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3173_1381">
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
              <td className="flex align-middle justify-center pt-2 ml-5 ">
                <a
                  class=" text-text  block m-1 bg-subbg hover:text-[#ffb732]  font-medium rounded-lg  p-1 text-center  "
                  href="#"
                >
                  <MdOutlineEdit size={20} />
                </a>{" "}
                <a
                  class=" text-text  block m-1 bg-subbg hover:text-[#c72c2c]  font-medium rounded-lg  p-1 text-center  "
                  href="#"
                >
                  <MdDelete size={20} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;
