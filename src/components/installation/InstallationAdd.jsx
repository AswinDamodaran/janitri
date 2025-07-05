import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInstallation } from "../../store/installationSlice";
import { useForm } from "react-hook-form";

function AddInstallationModal({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newInstallation = {
      id: Date.now(),
      ...data,
      checklistCompleted: false,
      trainingFormSubmitted: false,
      unboxingPhoto: null,
    };
    dispatch(addInstallation(newInstallation));
    reset();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 backdrop-blur-md"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-background p-6 rounded-lg w-[80vw] max-w-md shadow-xl"
      >
        <h3 className="text-lg font-semibold mb-4 text-text">
          Add Installation
        </h3>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Device</label>
          <input
            {...register("device", { required: "Device is required" })}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
            placeholder="Device name"
          />
          {errors.device && (
            <p className="text-red-500 text-xs mt-1">{errors.device.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Facility</label>
          <input
            {...register("facility", { required: "Facility is required" })}
            className="w-full p-2 border border-border rounded bg-subbg text-text"
            placeholder="Facility name"
          />
          {errors.facility && (
            <p className="text-red-500 text-xs mt-1">{errors.facility.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-text">Status</label>
          <input
            {...register("status", { required: "Status is required" })}
            className="w-full p-2 border border-border rounded bg-subbg text-text"
            placeholder="Status"
          />
          {errors.status && (
            <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
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

export default AddInstallationModal;
