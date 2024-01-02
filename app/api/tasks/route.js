import db from "@/utils/db";

export const GET = async () => {
  const tasks = await db.task.findMany();
  return Response.json({ tasks });
};

export const POST = async (request) => {
  const data = await request.json();
  await db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ msg: "new task created" });
};
