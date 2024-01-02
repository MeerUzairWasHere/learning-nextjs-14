import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getAllTasks } from "@/utils/action";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Learning Nextjs 14 | Tasks",
  description: "Happy New Year!",
};

const TasksPage = async () => {
  const tasks = await getAllTasks();
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};
export default TasksPage;
