import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addInstallation,
  updateInstallation,
} from "../../store/installationSlice";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

function AddInstallationModal({ isOpen, onClose, initialData = null }) {
  const dispatch = useDispatch();
   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      id: initialData?.id || Date.now(),
      ...data,
      checklistCompleted: initialData?.checklistCompleted ?? false,
      trainingFormSubmitted: initialData?.trainingFormSubmitted ?? false,
      unboxingPhoto: initialData?.unboxingPhoto ?? null,
    };

    if (initialData) {
      dispatch(updateInstallation(payload));
    } else {
      dispatch(addInstallation(payload));
    }
    enqueueSnackbar("Saved!", { variant: "success" });
    reset();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setValue("device", initialData.device);
        setValue("facility", initialData.facility);
        setValue("status", initialData.status);
      } else {
        reset();
      }
    }
  }, [isOpen, initialData, setValue, reset]);

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
          {initialData ? "Edit Installation" : "Add Installation"}
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
            <p className="text-red-500 text-xs mt-1">
              {errors.facility.message}
            </p>
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
            {initialData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddInstallationModal;
