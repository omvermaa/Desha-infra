import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "../shared/routes";
import { type ZodType } from "zod";

// Log Zod validation errors for easier debugging
function parseWithLogging<T>(schema: ZodType<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      return parseWithLogging(api.projects.list.responses[200], data, "projects.list");
    },
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: [api.projects.getBySlug.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.projects.getBySlug.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch project");
      const data = await res.json();
      return parseWithLogging(api.projects.getBySlug.responses[200], data, "projects.getBySlug");
    },
    enabled: !!slug,
  });
}