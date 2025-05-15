import { comments } from "@/app/comments/data";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const comment = comments.find((comment) => parseInt(id) === comment.id);

  return Response.json(comment);
}
