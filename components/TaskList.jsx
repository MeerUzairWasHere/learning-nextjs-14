import { deleteTask } from "@/utils/action";
import Link from "next/link";

const TaskList = async ({ tasks }) => {
  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>;
  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            key={task.id}>
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through text-error" : "text-success"
              }`}>
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs">
                edit
              </Link>
              <form action={deleteTask}>
                <input type="hidden" name="id" value={task.id} />
                <button className="btn btn-xs btn-error">delete</button>
              </form>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
