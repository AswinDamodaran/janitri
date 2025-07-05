import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContract } from "../../store/trackerSlice";

function TrackerAdd({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    deviceId: "",
    contractType: "",
    status: "Active",
    startDate: "",
    endDate: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({
        deviceId: "",
        contractType: "",
        status: "Active",
        startDate: "",
        endDate: "",
      });
      setFormErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.deviceId.trim()) errors.deviceId = "Device ID is required";
    if (!formData.contractType.trim()) errors.contractType = "Category is required";
    if (!formData.startDate) errors.startDate = "Last service date is required";
    if (!formData.endDate) errors.endDate = "Installation date is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newTracker = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addContract(newTracker));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 backdrop-blur-md"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-background p-6 rounded-lg w-[80vw] max-w-md shadow-xl"
      >
        <h3 className="text-lg font-semibold mb-4 text-text">Add Tracker</h3>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Device ID</label>
          <input
            name="deviceId"
            value={formData.deviceId}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-subbg text-text ${
              formErrors.deviceId ? "border-red-500" : "border-border"
            }`}
            placeholder="Enter device ID"
          />
          {formErrors.deviceId && (
            <p className="text-red-500 text-xs mt-1">{formErrors.deviceId}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Category</label>
          <input
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-subbg text-text ${
              formErrors.contractType ? "border-red-500" : "border-border"
            }`}
            placeholder="Enter contract type"
          />
          {formErrors.contractType && (
            <p className="text-red-500 text-xs mt-1">{formErrors.contractType}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-border rounded bg-subbg text-text"
          >
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Last Service</label>
          <input
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-subbg text-text ${
              formErrors.startDate ? "border-red-500" : "border-border"
            }`}
            type="date"
          />
          {formErrors.startDate && (
            <p className="text-red-500 text-xs mt-1">{formErrors.startDate}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-text">Installation (End Date)</label>
          <input
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-subbg text-text ${
              formErrors.endDate ? "border-red-500" : "border-border"
            }`}
            type="date"
          />
          {formErrors.endDate && (
            <p className="text-red-500 text-xs mt-1">{formErrors.endDate}</p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 bg-text2 hover:bg-gray-400 text-text rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1 bg-button text-text2 hover:opacity-90 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TrackerAdd;
