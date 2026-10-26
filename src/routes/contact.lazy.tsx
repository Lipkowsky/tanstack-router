import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={() => navigate({ to: "/about" })}>Go to About</button>
    </div>
  );
}
