import prisma from "@/utils/db";
import Link from "next/link";

const createHandler = async () => {
  await prisma.task.create({
    data: {
      content: "cool",
    },
  });
};
const prismaHandlers = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

export const metadata = {
  title: "Learning Nextjs 14 | Prisma",
  description: "Happy New Year!",
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <Link href="/tasks" className="btn btn-accent mb-5">
        Create new task
      </Link>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😬 {task.content}
          </h2>
        );
      })}
      {/* haha */}
    </div>
  );
};
export default PrismaExample;
