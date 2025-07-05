import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addServiceVisit, updateServiceVisit } from "../../store/serviceSlice"; // ✅ import update
import { useSnackbar } from "notistack";

function ServiceAdd({ isOpen, onClose, initialData }) {
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
    const attachments =
      data.attachments && data.attachments.length > 0
        ? [data.attachments[0].name]
        : initialData?.attachments || [];

    const payload = {
      ...data,
      id: initialData?.id || `SV${Date.now()}`,
      attachments,
    };

    if (initialData) {
      dispatch(updateServiceVisit(payload));
    } else {
      dispatch(addServiceVisit(payload));
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
          {initialData ? "Edit Service Visit" : "Add Service Visit"}
        </h3>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Device ID</label>
          <input
            {...register("deviceId", { required: true })}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
            placeholder="Device ID"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Engineer</label>
          <input
            {...register("engineer", { required: true })}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
            placeholder="Engineer Name"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Purpose</label>
          <input
            {...register("purpose", { required: true })}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
            placeholder="Purpose"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm text-text">Notes</label>
          <textarea
            {...register("notes")}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
            placeholder="Notes"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-text">Attachment</label>
          <input
            type="file"
            {...register("attachments")}
            className="w-full p-2 border border-border rounded text-text bg-subbg"
          />
          {initialData?.attachments && (
            <p className="text-xs mt-1 text-text">
              Existing: {initialData.attachments}
            </p>
          )}
        </div>

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

export default ServiceAdd;
