import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContract, updateContract } from "../../store/trackerSlice";
import { useSnackbar } from "notistack";

function TrackerAdd({ isOpen, onClose, initialData }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (isOpen && initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key, value);
      });
    } else {
      reset();
    }
  }, [isOpen, initialData, setValue, reset]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      id: initialData?.id || Date.now(),
    };

    if (initialData) {
      dispatch(updateContract(payload));
    } else {
      dispatch(addContract(payload));
    }
    enqueueSnackbar("Saved!", { variant: "success" });
    reset();
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
        onSubmit={handleSubmit(onSubmit)}
        className="bg-background p-6 rounded-lg w-[80vw] max-w-md shadow-xl"
      >
        <h3 className="text-lg font-semibold mb-4 text-text">
          {initialData ? "Edit Tracker" : "Add Tracker"}
        </h3>

        <input
          {...register("deviceId", { required: true })}
          placeholder="Facility ID"
          className="mb-3 w-full p-2 border border-border rounded bg-subbg text-text"
        />

        <input
          {...register("contractType", { required: true })}
          placeholder="Contract Type"
          className="mb-3 w-full p-2 border border-border rounded bg-subbg text-text"
        />

        <input
          type="date"
          {...register("startDate", { required: true })}
          className="mb-3 w-full p-2 border border-border rounded bg-subbg text-text"
        />

        <input
          type="date"
          {...register("endDate", { required: true })}
          className="mb-3 w-full p-2 border border-border rounded bg-subbg text-text"
        />

        <select
          {...register("status")}
          className="mb-4 w-full p-2 border border-border rounded bg-subbg text-text"
        >
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1 bg-button text-text2 hover:opacity-90 rounded"
          >
            {initialData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TrackerAdd;
