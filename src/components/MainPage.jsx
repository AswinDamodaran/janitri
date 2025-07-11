import React, { useState } from "react";
import userIcon from "../assets/profile4.svg";
import logo from "../assets/globe.svg";
import { MdOutlineDevicesOther } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoIosPhotos } from "react-icons/io";
import DarkMode from "./DarkMode";
import DeviceList from "./devices/DeviceList";
import InstallationList from "./installation/InstallationList";
import ServiceList from "./servicelist/ServiceList";
import TrackerList from "./trackers/TrackerList";
import AlertList from "./Alert logs/AlertList";

function MainPage() {
  const [sidebar, setSidebar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [tableView, setTableView] = useState("device");

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full bg-subbg  pl-0 "
        onClick={() => {
          setSidebar(false);
          setProfileOpen(false)
        }}
      >
        <div className="px-2 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSidebar((prev) => !prev);
                }}
                className="inline-flex items-center p-2 text-sm text-text rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-8 ml-3" alt="test Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-background">
                  Test
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div
                className="flex items-center ms-3 gap-3 "
                onClick={() => setSidebar(false)}
              >
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-subbg rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded={profileOpen}
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileOpen((prev) => !prev);
                    }}
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={userIcon}
                      alt="user photo"
                    />
                  </button>
                </div>
                <DarkMode />
                <div
                  className={`z-50 ${
                    profileOpen ? "block" : "hidden"
                  } absolute right-4 top-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
               onClick={() => {
          setSidebar(false);
          setProfileOpen(false)
        }}
        id="logo-sidebar "
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } bg-background border-gray-200 sm:translate-x-0 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-subbg text-text mt-2 pt-10 ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-text rounded-lg   hover:bg-button "
                onClick={() => setTableView("device")}
              >
                <MdOutlineDevicesOther />
                <span className="ms-3">Devices</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setTableView("installation")}
                className="flex items-center p-2 text-text rounded-lg  hover:bg-button "
              >
                <MdModelTraining />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Installation & Training
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setTableView("service")}
                className="flex items-center p-2 text-text rounded-lg  hover:bg-button "
              >
                <MdOutlineHomeRepairService />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Service logs
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setTableView("tracker")}
                className="flex items-center p-2 text-text rounded-lg  hover:bg-button "
              >
                <MdOutlineTrackChanges />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  AMC/CMC Tracker
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setTableView("alerts")}
                className="flex items-center p-2 text-text rounded-lg  hover:bg-button "
              >
                <IoIosPhotos />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Alerts & Photo Logs
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className="flex justify-center bg-background"
        onClick={() => {
          setSidebar(false);
          setProfileOpen(false);
        }}
      >
        {tableView === "device" && <DeviceList />}
        {tableView === "installation" && <InstallationList />}
        {tableView === "service" && <ServiceList />}
        {tableView === "tracker" && <TrackerList />}
        {tableView === "alerts" && <AlertList />}
      </div>
    </>
  );
}

export default MainPage;
