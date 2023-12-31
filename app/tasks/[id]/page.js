import { editTask, getSingleTask } from "@/utils/action";
import Link from "next/link";

const SingleTask = async ({ params }) => {
  const taskDetail = await getSingleTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <form
        action={editTask}
        className="max-w-sm p-12 border border-base-300 rounded-lg">
        <input type="hidden" name="id" value={params.id}></input>
        <input
          type="text"
          required
          className="input input-bordered w-full"
          name="content"
          defaultValue={taskDetail.content}
        />
        <div className="form-control my-4">
          <label for="completed" className="label cursor-pointer">
            <span class="label-text">completed</span>
            <input
              id="completed"
              class="checkbox checkbox-primary checkbox-sm"
              type="checkbox"
              defaultChecked={taskDetail.completed}
              name="completed"
            />
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-sm">
          edit
        </button>
      </form>
    </>
  );
};
export default SingleTask;
