import { comments } from "@/app/comments/data";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const comment = comments.find((comment) => parseInt(id) === comment.id);

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();

  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[index];

  comments.slice(index, 1);

  return Response.json(deletedComment);
}
