import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addServiceVisit } from "../../store/serviceSlice"; 

function ServiceAdd({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  

  const onSubmit = (data) => {
    const newService = {
      id: Date.now(),
      ...data,
      attachments: data.attachments?.[0]?.name || "",
    };
    dispatch(addServiceVisit(newService));
    reset();
    onClose();
    console.log(data)
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-30 backdrop-blur-md"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-background p-6 rounded-lg w-[80vw] max-w-md shadow-xl"
      >
        <h3 className="text-lg font-semibold mb-4 text-text">Add Service Visit</h3>

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
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceAdd;
