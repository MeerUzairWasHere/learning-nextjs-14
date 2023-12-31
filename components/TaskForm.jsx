"use client";
import { createTask } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn join-item capitalize btn-primary"
      disabled={pending}>
      {pending ? "please wait... " : "create task"}
    </button>
  );
};
const initialState = { message: null };

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);
  useEffect(() => {
    if (state.isSuccess) {
      toast.success(state.message);
      document.getElementById("form").reset();
      return;
    }
    if (!state.isSuccess) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form id="form" action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="Type here"
          id="contentField"
          className="input input-bordered join-item w-full"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskForm;
