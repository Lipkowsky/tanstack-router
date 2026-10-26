import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const id = params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id ${id}`);
    }
    const post = await response.json();
    return { post };
  },
  pendingComponent: () => <div>Loading post...</div>,
  errorComponent: () => (
    <div>
      <h1>Error loading post</h1>{" "}
    </div>
  ),
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return <div>Post title: {post.title}</div>;
}
