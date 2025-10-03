import { createRootRoute, createRouter } from "@tanstack/react-router";
import Home from "@/pages/Home";

const rootRoute = createRootRoute({
  component: () => <Home />,
});

const routeTree = rootRoute.addChildren([]);

export const router = createRouter({ routeTree });
